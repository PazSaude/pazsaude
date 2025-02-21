import Head from "next/head";
import Page from "./Page/Page";
export default function Home() {
  return (
    <>
      <Head>
        <title>Paz saúde</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.pazsaude.com.br/images/logo-oficial-transparente_med.png"
        />
      </Head>
      <>
        <Page />
      </>
    </>
  );
}
