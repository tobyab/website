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
                    <h1 className={styles.title}>404</h1>
                    <h3 className={styles.subtitle}>Gadzooks! The page you were searching for wasn&apos;t found!</h3>
                    <button onClick={retHome} className={styles.return}>Back to the landing!</button>
                </body>
                </div>
     );
}

function retHome() {
    window.open("/", "_self");
}
