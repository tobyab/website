import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Error.module.css'

export default function notFound() {
    return ( 
        <div className={styles.container}>
            <Head>
                <title>:(</title>
                <link rel="icon" href="/peep (3).png" />
                </Head>
                <body>
                    <h1 className={styles.title}>500</h1>
                    <h3 className={styles.subtitle}>Gadzooks! It appears something has gone wrong!</h3>
                    <button onClick={retHome} className={styles.return}>Back to the landing!</button>
                    <p className={styles.contact}>If you&apos;re still having issues please <a className={styles.contactMeRef} onClick={contactMe}>email me</a>!</p>
                </body>
                </div>
     );
}

function retHome() {
    window.open("/", "_self");
}

function contactMe() {
    window.open("mailto:toby@tobyb.xyz", "_blank");
}
