import styles from '../styles/Guestbook.module.scss'
import Head from 'next/head'
import prisma from '../utils/prisma';
import Guestbook from '../components/guestbook'
import MenuButton from '../components/menuButton'

export default function GuestbookPage({ fallbackData }) {
  return (
    <div className={styles.Pagecontainer}>
    <Head>
      <title>Toby B / Guestbook</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="./icon.png" />
        <meta property="og:url" content="https://tobyb.xyz" />
        <meta property="og:type" content="Personal website." />
        <meta
          property="og:title"
          content="Toby B."
        />
        <meta name="twitter:card" content="Toby's guestbook." />
        <meta
          property="og:description"
          content="13 y/o full stack web dev & designer."
        />
        <meta property="og:image" content={"/banner.png"} />
    </Head>
    <MenuButton/>
        <h1>
          Guestbook.
        </h1>
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

// Heavily inspired by Leerob! (https://leerob.io).