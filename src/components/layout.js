import Head from "next/head";

import Navigation from "./Navigation";

const Layout = (props) => (
  <>
    <Head>
      <title>Magic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navigation />
    <main>
      <div>{props.children}</div>
    </main>
  </>
);

export default Layout;
