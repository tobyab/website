import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import React, {useEffect} from "react";
import { useKBar } from 'kbar';
import { TextLoop } from "react-text-loop-next";
import MenuButton from '../components/menuButton'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Toby B</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./icon.png" />
        <meta name="theme-color" content="#000"/>
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
        <meta property="og:image" content={"/banner.png"} />
      </Head>
      <MenuButton></MenuButton>
      <body>

          <h1 className={styles.title}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>

<div className={styles.aboutRotate}>
  <p className={styles.age}> 13 y/o</p>
  <div className={styles.rotatingText}>
  <TextLoop delay={5}>
          <p>full stack web dev.</p>
          <p>designer.</p>
          <p>nerd.</p>
          <p>hackclubber.</p>
          <p>open source enthusiast.</p>
          <p>pizza eater.</p>
        </TextLoop>
    </div>
</div>
          <div className={styles.mediv}>
              <Image className={styles.me} src="/me.svg" alt="Toby" width="100%" height="100%" layout="responsive" objectFit="contain" priority />
          </div>

        </body>
        </div>
  );
}
