import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import React, {useEffect} from "react";
import { useKBar } from 'kbar';
import { TextLoop } from "react-text-loop-next";

export default function Home() {
const { query } = useKBar();
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby B</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.png" />
        <meta property="og:url" content="https://tobyb.xyz" />
        <meta property="og:type" content="Personal website." />
        <meta
          property="og:title"
          content="Toby B."
        />
        <meta name="twitter:card" content="13 y/o full stack web dev & designer." />
        <meta
          property="og:description"
          content="13 y/o full stack web dev & designer."
        />
        <meta property="og:image" content={"/preview.svg"} />
      </Head>
      <body>
      <ChakraProvider>

        <svg className={styles.cmdkbutton} onClick={() => query.toggle()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path 
          fill="none" stroke="#000" strokeWidth="2" d="M12,9 C9,9 6.83333333,9 5.5,9 C3.5,9 2,7.5 2,5.5 C2,3.5 3.5,2 5.5,2 C7.5,2 9,3.5 9,5.5 C9,6.83333333 9,9 9,12 C9,15 9,17.1666667 9,18.5 C9,20.5 7.5,22 5.5,22 C3.5,22 2,20.5 2,18.5 C2,16.5 3.5,15 5.5,15 C6.83333333,15 9,15 12,15 C15,15 17.1666667,15 18.5,15 C20.5,15 22,16.5 22,18.5 C22,20.5 20.5,22 18.5,22 C16.5,22 15,20.5 15,18.5 C15,17.1666667 15,15 15,12 L15,5.5 C15,3.5 16.5,2 18.5,2 C20.5,2 22,3.5 22,5.5 C22,7.5 20.5,9 18.5,9 L12,9 Z"/></svg>

          <h1 className={styles.opentext}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>

<div className={styles.aboutRotate}>
  <h1 className={styles.age}>13 y/o</h1>
  <div className={styles.rotate}>
  <TextLoop delay={5}>
          <h1>full stack web dev.</h1>
          <h1>designer.</h1>
          <h1>nerd.</h1>
          <h1>hackclubber.</h1>
          <h1>open source enthusiast.</h1>
          <h1>pizza eater.</h1>
        </TextLoop>
        </div>
        </div>

          <div className={styles.mediv}>
              <Image className={styles.me} src="/me.svg" alt="Toby" width="100%" height="100%" layout="responsive" objectFit="contain" priority />
          </div>

        </ChakraProvider>
        </body>
        </div>
  );
}
