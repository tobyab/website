import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <title>Toby Brown</title>
      <meta property="og:title" content="Toby Brown" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Toby's personal website" />
      <meta property="og:url" content="https://tobyb.dev" />
      <meta property="og:image" content="/meta.svg" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tobyb.dev" />
      <meta property="twitter:url" content="https://tobyb.dev" />
      <meta name="twitter:title" content="Toby Brown" />
      <meta name="twitter:description" content="Toby's personal website" />
      <meta name="twitter:image" content="https://tobyb.dev/meta.svg" />
    </Head>
  );
}
