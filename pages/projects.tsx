import styles from '../styles/Projects.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useKBar } from 'kbar'
import MenuButton from '../components/menuButton'

export default function Projects() {
  return (
    <div className={styles.container}>
    <Head>
    <title>Toby B / Projects</title>
      <link rel="icon" href="./icon.png" />
      <meta property="og:url" content="https://personal-sitev2.vercel.app" />
      <meta property="og:type" content="Personal website." />
      <meta name="theme-color" content="#fff" />
      <meta
        property="og:title"
        content="Toby B." />
      <meta name="twitter:card" content="13 y/o full stack web dev & designer." />
      <meta
        property="og:description"
        content="Toby's Projects." />
      <meta property="og:image" content={"/banner.png"} />
    </Head>
    <MenuButton></MenuButton>
    <body>

    <h1 className={styles.title}>Projects.</h1>
    <h1 className={styles.subtitle}> To see all of my projects, check out my <a className={styles.gitRef} onClick={githubRef}>GitHub</a>.</h1>
    
    <div className={styles.homeadvisorContatiner}>
      <div className={styles.HAwrapper}>
    <Image className={styles.HAimg} src="/conifer.svg" alt="Home advisor" width="100%" height="100%" layout="responsive" objectFit="contain" priority />
    </div>
    <a className={styles.HAref} onClick={showHA}>Check it out</a>
      <h1 className={styles.HAtitle}>Conifer</h1>
      <p className={styles.HAdesc}>Conifer is the best way for<br />
       anyone to program a personal website.</p>
    </div>

    <div className={styles.posstartContatiner}>
    <div className={styles.PSwrapper}>

    <Image className={styles.PSimg} src="/PS-prev.svg" alt="Positive Start" width="100%" height="100%" layout="responsive" objectFit="contain" />

    </div>
      <h1 className={styles.PStitle}>Positive start</h1>
      <p className={styles.PSdesc}>Positive start is an email newsletter that <br /> helps you look fowards to waking up.</p>
      <a className={styles.PSref} onClick={showPS}>Check it out</a>
    </div>
</body>
</div>
    )
}

function githubRef() {
  window.open("https://github.com/itstobez?tab=repositories", "_blank");
}

function showPS() {
  window.open("https://positivestart.vercel.app", "_blank");
}

function showHA() {
  window.open("https://conifer.vercel.app", "_blank");
}