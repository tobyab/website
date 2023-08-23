import { useState } from "react";
import { Form, FormState } from "../utils/states";
import { signIn, useSession } from "next-auth/react";
import { format } from "date-fns";
import { P, S } from "./design/typography";
import { Button } from "./design/button";
import { Toaster, toast } from "sonner";

function GuestbookEntry({ data }) {
  return (
    <div className="py-2 w-auto">
      <P>{data.body}</P>
      <S className="font-mono">
        {data.created_by} - {format(new Date(data.created_at), "MMM y")}
      </S>
    </div>
  );
}

export default function Guestbook({ data }: { data: Array<any> }) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const [entry, setEntry] = useState("");
  const { data: session } = useSession();

  const leaveEntry = async (e: any) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const response = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: entry,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await response.json();

    console.log("response: " + error);
    if (error) {
      setForm({ state: Form.Error });
      toast("Uh oh. Something's gone wrong.");
    } else {
      setForm({
        state: Form.Success,
      });
      toast("Thanks for signing my guestbook!");
    }
  };

  return (
    <div className="max-w-2xl">
      <Toaster position="top-right" />
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
              className="bg-grey p-2 px-4 rounded-xl w-full placeholder-darkGrey outline-none"
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Your message..."
              required
            />
            <Button type="submit">
              {form.state === Form.Loading ? <P>Signing...</P> : <>Sign</>}
            </Button>
          </form>
        )}
      </div>
      {((data as Array<any>) || []).map((data) => (
        <GuestbookEntry key={data.id} data={data} />
      ))}
    </div>
  );
}
