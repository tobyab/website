import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Error.module.css'

export default function notFound() {
    return ( 
        <div className={styles.container}>
            <Head>
                <title>:(</title>
                <link rel="icon" href="/icon.png" />
                <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                    <h1 className={styles.title}>500</h1>
                    <h3 className={styles.subtitle}>Gadzooks! It appears something has gone wrong!</h3>
                    <button onClick={retHome} className={styles.return}>Back to the landing!</button>
                    <p className={styles.contact}>Check the <a onClick={viewStatus}>website status</a>!</p>
                </body>
                </div>
     );
}

function retHome() {
    window.open("/", "_self");
}

function viewStatus() {
    window.open("https://tobybxyz.statuspage.io", "_blank");
}
