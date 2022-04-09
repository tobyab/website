
import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
import toast, { Toaster } from 'react-hot-toast'
import copy from 'copy-to-clipboard'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Footer() {
const { data: session } = useSession();
return (
<footer className={styles.footer} style={{ position: "absolute", bottom: 0, width:"100%" }}>
    <div className={styles.pages}>
        Navigation<br/>
        <p>
        <Link href="/">Home</Link><br/>
        <Link href="/about">About</Link><br/>
        <Link href="/projects">Projects</Link><br/>
        <Link href="/guestbook">Guestbook</Link><br/>
        <Link href="/blog">Blog</Link>
        </p>
    </div>

    <div className={styles.socials}>
        Social<br/>
        <p>
        <Link href="https://twitter.com/DevelopedByToby">Twitter</Link><br/>
        <Link href="https://github.com/itstobez">GitHub</Link><br/>
        <Link href="https://www.linkedin.com/in/toby-b-987229232/">LinkedIn</Link><br/>
        </p>
        </div>

    <div className={styles.contact}>
        Contact<br/>
        <Link href="mailto:mail.toby@icloud.com">Email</Link><br/>
        <a onClick={() => {
                copy('Toby B#8552');
                toast.success('Copied to clipboard!')  
        }}>Discord</a>
    </div>
    <div className={styles.utilities}>
        Utilities<br/>
    <Link href="https://tobybxyz.statuspage.io">Status</Link><br/>
    <Link href="https://github.com/ItsTobez/tobyb.xyz/">Source Code</Link><br/>
    {!session && (
        <Link href="/api/auth/signin" passHref><a
        onClick={(e) => {
          e.preventDefault();
          signIn('github');
        }}
      >
        Sign in
      </a></Link>
    )}
      {session?.user && (
           <Link href="/api/auth/signout" passHref> <a
           onClick={(e) => {
             e.preventDefault();
             signOut();
           }}
         >
           Sign out
         </a></Link>
       )}
    </div>
    © Toby Brown {new Date().getFullYear()},<br/>
    Made with love in London.
</footer>
    )
}
