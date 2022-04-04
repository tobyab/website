import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import React from "react";
import MenuButton from '../components/menuButton'
import Link from 'next/link'

export default function Home() {
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
        <meta property="og:image" content={"/banner.png"} />
      </Head>
      <MenuButton/>
      <body>
        <p className={styles.name}>Toby Brown</p>
      <h1 className={styles.title}>13 y/o full stack web dev.</h1>
      <div className={styles.paragraph}>
        Hi, my name&apos;s Toby. I&apos;m a 13 year old full stack web developer from London. I&apos;ve been programming for about 6 years
        and have worked on dozens of projects. As of right now, I&apos;m interested in open source software and
        creating things for the web.
        <p className={styles.alert}>
          <Link href="mailto:mail.toby@icloud.com">
            I&apos;m currently searching for jobs →
            </Link>
        </p>
        I have experience in lots of areas of web development. My strongest of which being TypeScript, React and MySQL.
        I also have experience in operating systems like Linux. Outside of web development, I&apos;m interested in ethical hacking,
         UI design, computers and music.

        <p>
          My goal is to try and make a positive impact on the world through software, and to leave it better than I found it.
          I attempt to inspire, teach and be a friend to everyone-
          no matter who they are.
         </p> 
        </div>
        </body>
        </div>
  );
}

/*          <h1 className={styles.title}>Hi,<br></br> I&apos;m <br></br>Toby.</h1>

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
          </div> */