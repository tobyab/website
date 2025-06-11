import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Toby Brown</title>
      <meta property="og:title" content="Toby Brown" />
      <meta name="description" content="Toby's personal website" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta property="og:url" content="https://tobyb.dev" />
      <meta property="og:image" content="/meta.png" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tobyb.dev" />
      <meta property="twitter:url" content="https://tobyb.dev" />
      <meta name="twitter:title" content="Toby Brown" />
      <meta name="twitter:description" content="Toby's personal website" />
      <meta name="twitter:image" content="/meta.png" />
    </Head>
  );
}
