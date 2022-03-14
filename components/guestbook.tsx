import { useRef, useState } from 'react'
import { Form, FormState } from '../utils/states';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr'
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader'
import fetcher from '../utils/fetcher'
import styles from '../styles/Guestbook.module.scss'
import moment from 'moment'
import Link from 'next/link'

function GuestbookEntry({ entry, user }) {
  return (
    <div className={styles.entries}>
      <b>{entry.body}</b>
        <p>
        {entry.created_by} |&nbsp;
         {( moment(entry.updated_at).format('LL hh:mm'))}
         &nbsp;
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
        state: Form.Success,
        message: `Epic! Thank you for signing my guestbook!`
      });
    };
  
    return (
      <>
  <div className={styles.container}>
    <div className={styles.signForm}>
        <h2>Leave a message. </h2>
        <p>
          Leave a comment below for me, and all future visitors of this site!
        </p>
        {!session && (
          <div className={styles.logoutState}>
          <b>
            <Link href="/api/auth/signin/github">
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
              {form.state === Form.Loading ? <Loader /> : "Sign"}
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
      <div className={styles.entryText}>
      {entries?.map((entry) => (
     <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
     ))}
    </div>
  </div>
      </>
    )}
