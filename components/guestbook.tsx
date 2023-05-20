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
      <S>
        {entry.created_by} <span className="mx-1">/</span>{" "}
        {format(new Date(entry.updated_at), "d MMM y, h:mm")}
      </S>
    </div>
  );
}

export default function Guestbook() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const input = useRef(null);

  const { data: entries } = useSWR("/api/guestbook", fetcher);

  const { data: session } = useSession();

  const leaveEntry = async (e) => {
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
  };

  return (
    <div className="max-w-2xl">
      <div>
        {!session ? (
          <div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Continue with GitHub
            </Button>
          </div>
        ) : (
          <form onSubmit={leaveEntry} className="flex space-x-4">
            <input
              className="bg-grey p-2 px-4 rounded-xl w-full placeholder-darkGrey"
              ref={input}
              placeholder="Your message..."
              required
            />
            <Button type="submit">
              {form.state === Form.Loading ? <P>Loading...</P> : <>Sign</>}
            </Button>
          </form>
        )}
      </div>

      {form.state === Form.Error ? (
        <h1 className="text-xl lg:w-1/2 w-auto mt-2 mb-16">
          Uh oh! Something&apos;s gone wrong. Here&apos;s your error code:{" "}
          {Form.Error}.
        </h1>
      ) : form.state === Form.Success ? (
        <h1 className="text-xl lg:w-1/2 w-auto mt-2 mb-16">
          🎉 Wahoo! Thanks for signing the guestbook.
        </h1>
      ) : null}
      {((entries as Array<any>) || []).map((entry) => (
        <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
      ))}
    </div>
  );
}
