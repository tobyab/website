import { useRef, useState } from "react"
import { Form, FormState } from "../utils/states"
import { signIn, useSession } from "next-auth/react"
import useSWR from "swr"
import toast from "react-hot-toast"
import fetcher from "../utils/fetcher"
import { format } from "date-fns"

function GuestbookEntry({ entry, user }) {
  return (
    <div className="py-2">
      <p className="text-xl">{entry.body}</p>
        <p>
          <p className="text-gray-600">{entry.created_by} | {format(new Date(entry.updated_at), "d MMMM y, h:mm")}</p> 
        </p>
      </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const input = useRef(null);
  const { data: entries } = useSWR("/api/guestbook", fetcher, {
    fallbackData
  });
    
  const { data: session } = useSession();

    const leaveEntry = async (e) => {
      e.preventDefault();
      setForm({ state: Form.Loading });

      const response = await fetch("/api/guestbook", {
        body: JSON.stringify({
          body: input.current.value
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const { error } = await response.json();
      if (error) {
        setForm({
          state: Form.Error,
          message: error
        });
        return;
      }

      input.current.value = "";
      setForm({
        state: Form.Success,
      });
    };

    return (
      <>
        <div>
          <div>
              {!session && (
                <div>
                    <button
                      className="p-4 bg-gray-100 rounded-lg mb-8 border-2 border-transparent hover:border-gray-200"
                      onClick={(e) => {
                        e.preventDefault();
                        signIn('github');
                      }}
                    >
                      Sign in with GitHub
                    </button>
                </div>
              )}

              {session?.user && (
                <form onSubmit={leaveEntry} className="mb-16 flex">
                  <input
                    className="bg-gray-100 py-4 md:w-1/3 w-auto px-4 rounded-lg mr-4"
                    ref={input}
                    placeholder="Your message"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-gray-100 py-4 px-4 rounded-lg border-2 border-transparent hover:border-gray-200"
                  >
                    {form.state === Form.Loading ? <p>Loading...</p> : <img src="/icons/send.svg" alt="Send icon"/>}
                  </button>
                </form>
              )}
              {form.state === Form.Error ? (
                toast.error(`Something's up. Here's your error message: ${Form.Error}`)
              ): form.state === Form.Success ? (
                toast("Thanks for signing my guestbook!", {
                  icon: "🎉",
                })

              ): null}
              </div>
          <div>
            {entries?.map((entry) => (
              <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
            ))}
          </div>
        </div>
      </>
  )}
