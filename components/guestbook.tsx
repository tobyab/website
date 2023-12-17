import { useState } from "react";
import { Form, FormState } from "../utils/states";
import { signIn, useSession } from "next-auth/react";
import { format } from "date-fns";
import { P, S } from "./design/typography";
import { Button } from "./design/button";
import { Toaster, toast } from "sonner";
import prisma from "../utils/prisma";

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
    <div>
      <div className="flex space-x-8 mt-16 overflow-x-auto no-scrollbar w-full">
        {((data as Array<any>) || []).map((data) => (
          <Entry key={data.id} data={data} />
        ))}
      </div>
      <div className="mt-8">
        {!session ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Leave an entry
          </Button>
        ) : (
          <form onSubmit={leaveEntry} className="flex space-x-4">
            <input
              className="bg-grey p-2 px-4 rounded-xl max-w-sm w-full placeholder-darkGrey outline-none"
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
    </div>
  );
}

function Entry({ data }) {
  data.body =
    data.body.length > 130 ? data.body.substring(0, 250) + "..." : data.body;
  return (
    <div className="bg-grey p-4 rounded-xl border justify-center place-items-center flex-shrink-0 grid">
      <div className="space-y-2 max-w-sm">
        <P>{data.body}</P>
        <S className="text-darkGrey">— {data.created_by}</S>
      </div>
    </div>
  );
}
