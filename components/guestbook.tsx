import { useRef, useState } from "react";
import { Form, FormState } from "../utils/states";
import { signIn, useSession } from "next-auth/react";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { format } from "date-fns";
import { P, S } from "./design/typography";
import { Button } from "./design/button";

function GuestbookEntry({ entry, user }) {
  return (
    <div className="py-2 w-auto">
      <P>{entry.body}</P>
      <S className="font-mono">
        {entry.created_by} -{" "}
        {format(new Date(entry.updated_at), "d MMM y, h:mm")}
      </S>
    </div>
  );
}

export default function Guestbook({ fallbackData }) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const input = useRef(null);
  const { data: entries } = useSWR("/api/guestbook", fetcher, {
    fallbackData,
  });

  const { data: session } = useSession();

  if (session) {
    console.log("----------------");
    console.log(session.user.email);
    console.log(session.user.name);
    console.log("----------------");
  }

  async function leaveEntry(e) {
    e.preventDefault();
    setForm({ state: Form.Loading });
    const response = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: input.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await response.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }
    input.current.value = "";
    setForm({
      state: Form.Success,
    });
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        {!session ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Continue with GitHub
          </Button>
        ) : (
          <form onSubmit={leaveEntry} className="flex space-x-4">
            <input
              className="bg-grey p-2 px-4 rounded-xl w-full placeholder-darkGrey"
              ref={input}
              placeholder="Your message..."
              required
            />
            <Button type="submit">
              {form.state === Form.Loading ? <P>Signing...</P> : <>Sign</>}
            </Button>
          </form>
        )}
      </div>
      <div className="mb-6">
        {form.state === Form.Error ? (
          <P>Uh oh! Something&apos;s gone wrong. Please try again later.</P>
        ) : form.state === Form.Success ? (
          <P>Thanks for signing my guestbook!</P>
        ) : null}
      </div>

      {((entries as Array<any>) || []).map((entry) => (
        <GuestbookEntry key={entry.id} entry={entry} user={entry.created_by} />
      ))}
    </div>
  );
}
