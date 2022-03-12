import { useRef, useState } from 'react'
import prisma from '../utils/prisma';
import { Form, FormState } from '../utils/states';
import { signIn, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr'
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader'
import fetcher from '../utils/fetcher'

var Filter = require('bad-words'),
    filter = new Filter();

export default function Guestbook({ fallbackData }) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR('/api/guestbook', fetcher, {
    fallbackData
  });

  function GuestbookEntry({ entry, user }) {
    const { mutate } = useSWRConfig();
    const deleteEntry = async (e) => {
      e.preventDefault();
  
      await fetch(`/api/guestbook/${entry.id}`, {
        method: 'DELETE'
      });
  
      mutate('/api/guestbook');
    };
    
  const { data: session } = useSession();

    const leaveEntry = async (e) => {
      e.preventDefault();
      setForm({ state: Form.Loading });
  
      const res = await fetch('/api/guestbook', {
        body: JSON.stringify({
          body: inputEl.current.value
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
  
      inputEl.current.value = '';
      setForm({
        state: Form.Success,
        message: `Epic! Thank you for signing my guestbook!`
      });
    };
  
    return <>;
<div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Sign the Guestbook
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Share a message for a future visitor of my site.
        </p>
        {!session && (
          <a
            href="/api/auth/signin/github"
            className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
            onClick={(e) => {
              e.preventDefault();
              signIn('github');
            }}
          >
            Login
          </a>
        )}

          <button
              className="delete" onClick={deleteEntry}>
              Delete
            </button>
        {session?.user && (
          <form onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              placeholder="Enter your message."
              required
            />
            <button type="submit">
              {form.state === Form.Loading ? <Loader /> : 'Sign'}
            </button>
          </form>
        )}
        {form.state === Form.Error ? (
          toast.error("Uh oh! Something went wrong!")
        ) : form.state === Form.Success ? (
          toast.success("Yay! Thanks for signing my guestbook.")
        ) : null}
      </div>
      <>
      {entries?.map((entry) => (
       <GuestbookEntry key={entry.id} entry={entry} user={session?.user} />
   ))}
   </>
    </>
  }
}