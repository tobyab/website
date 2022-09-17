import { useRef, useState } from 'react'
import { Form, FormState } from '../utils/states';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr'
import toast from 'react-hot-toast'
import fetcher from '../utils/fetcher'
import moment from 'moment'
import Link from 'next/link'

function GuestbookEntry({ entry, user }) {
  return (
    <div className="py-2">
      <p className="text-xl">{entry.body}</p>
        <p>
          <p className="text-gray-600">{entry.created_by} |&nbsp;{( moment(entry.updated_at).format('MMMM D h:m, y'))}</p> 
        </p>
      </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const input = useRef(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });
    
  const { data: session } = useSession();

    const leaveEntry = async (e) => {
      e.preventDefault();
      setForm({ state: Form.Loading });
  
      const res = await fetch('/api/guestbook', {
        body: JSON.stringify({
          body: input.current.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
  
      const { error } = await res.json();
      if (error) {
        setForm({
          state: Form.Error,
          message: error
        });
        return;
      }
  
      input.current.value = '';
      setForm({
        state: Form.Success
      });
    };
  
    return (
      <>
        <div>
          <div>
              {!session && (
                <div>
                  <Link href="/api/auth/signin/github" passHref>
                    <button
                      className="p-4 bg-gray-100 rounded-lg mb-8"
                      onClick={(e) => {
                        e.preventDefault();
                        signIn('github');
                      }}
                    >
                      Sign in with GitHub.
                    </button>
                  </Link>
                </div>
              )}

              {session?.user && (
                <form onSubmit={leaveEntry} className="mb-16 flex">
                  <input
                    className="bg-gray-100 py-4 w-1/3 px-4 rounded-lg mr-4"
                    ref={input}
                    placeholder="Be nice :)"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-gray-100 py-4 px-4 rounded-lg"
                  >
                    {form.state === Form.Loading ? <p>Loading</p> : <img src="/icons/send.svg"/>}
                  </button>
                </form>
              )}
              {form.state === Form.Error ? (
                toast.error("Uh oh! Something went wrong. Try again.")
              ) : form.state === Form.Success ? (

                toast("Thanks for signing my guestbook!", {
                  icon: "🎉",
                })

              ) : null}
              </div>
          <div>
            {entries?.map((entry) => (
              <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
            ))}
          </div>
        </div>
      </>
  )}
