import { useRef, useState } from 'react'
import { Form, FormState } from '../utils/states';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr'
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader'
import fetcher from '../utils/fetcher'
import styles from '../styles/Guestbook.module.scss'
import moment from 'moment'

function GuestbookEntry({ entry, user }) {
  const { mutate } = useSWRConfig();
  const deleteEntry = async (e) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: 'DELETE'
    });

    mutate('/api/guestbook');
  };

  return (
    <div className={styles.entries}>
      <div className="entryText"><b>{entry.body}</b></div>
      <div>
        <p>
        </p>
        <p>
        {entry.created_by} &nbsp;
         {( moment(entry.updated_at).format('LL hh:mm'))}
         &nbsp;
         {user && entry.created_by === user.name && (
            <a onClick={deleteEntry}>
             Delete
          </a>
            )}
         </p>
        
       
      </div>
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
      toast('Thanks for signing my guestbook!')
    };
  
    return (
      <>
  <div className={styles.container}>
    <div className={styles.signForm}>
        <h2> Leave a message. </h2>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Leave a comment below for me, and all future visitors of this site!
        </p>
        {!session && (
          <b>
          <a
            href="/api/auth/signin/github"
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Sign in.
          </a>
          </b>
        )}

        {session?.user && (
          <form onSubmit={leaveEntry}>
            <input
              ref={input}
              placeholder="Enter your message."
              required
            />
            <button type="submit">
              {form.state === Form.Loading ? <Loader /> : 'Sign'}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          toast.error("Uh oh! Something went wrong. Try again.")
        ) : form.state === Form.Success ? (
          toast.success("Yay! Thanks for signing my guestbook.")
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