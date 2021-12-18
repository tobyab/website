import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby B</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
    <div className="App">
      <header className="App-header" />
  </div>
  <h1 className={styles.opentext}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>
</ChakraProvider>
    </div>
  );
}
