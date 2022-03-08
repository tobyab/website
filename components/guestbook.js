import { signIn, useSession } from 'next-auth/react';

function GuestbookEntry({ entry, user }) {
    const { mutate } = useSWRConfig();
    const deleteEntry = async (e) => {
      e.preventDefault();
  
      await fetch(`/api/guestbook/${entry.id}`, {
        method: 'DELETE'
      });
  
      mutate('/api/guestbook');
    }};
  