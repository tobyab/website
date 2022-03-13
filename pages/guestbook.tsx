import styles from '../styles/Projects.module.scss'
import Head from 'next/head'
import prisma from '../utils/prisma';
import Guestbook from '../components/guestbook'

export default function GuestbookPage({ fallbackData }) {
  return (
    <div className="container">
        <h1>
          Guestbook
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Leave a comment below. Everything is read an appreciated!
        </p>
        <Guestbook fallbackData={fallbackData} />
      </div>
  )
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc',
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    updated_at: entry.updated_at.toString(),
    created_by: entry.created_by.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}

// Heavily inspired by Leerob! (leerob.io).