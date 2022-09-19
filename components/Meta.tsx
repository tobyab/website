import Head from "next/head"

export default function Meta() {
    return (
        <Head>
            <meta property="og:title" content="Toby Brown!"/>
            <title>Toby Brown!</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta name="description" content="Toby&apos;s personal website"/>
            <meta property="og:url" content="https://tobyb.dev"/>
            <meta property="og:image" content="/card.png"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Toby Brown!"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Toby Brown!"/>
            <meta name="twitter:description" content="Toby&apos;s personal website"/>
            <meta name="twitter:image" content="https://tobyb.dev/meta.png"/>
            <meta name="twitter:image:alt" content="&quot;Toby&apos;s memoji.&quot;"/>
            <meta name="twitter:site" content="@developedbytoby"/>
            <meta name="twitter:creator" content="@developedbytoby"/>
        </Head>
    )
}
