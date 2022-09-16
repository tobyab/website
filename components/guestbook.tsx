import { useRef, useState } from 'react'
import { Form, FormState } from '../utils/states';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr'
import toast, { Toaster } from 'react-hot-toast'
import fetcher from '../utils/fetcher'
import moment from 'moment'
import Link from 'next/link'

function GuestbookEntry({ entry, user }) {
  return (
    <div>
      <b>{entry.body}</b>
        <p>
          {entry.created_by} |&nbsp;
          {( moment(entry.updated_at).format('LL hh:mm'))}
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
        <h2>Leave a message. </h2>
        <p>
          Leave a message below for me, and all future visitors of this site!
        </p>
        {!session && (
          <div>
          <b>
            <Link href="/api/auth/signin/github" passHref>
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Sign in with GitHub.
          </button>
          </Link>
          </b>
          <p>Only public information is displayed.</p>
          </div>
        )}

        {session?.user && (
          <form onSubmit={leaveEntry}>
            <input
              ref={input}
              placeholder="Enter your message."
              required
            />
            <button type="submit">
              {form.state === Form.Loading ? <p>Loading</p> : "Sign"}
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
