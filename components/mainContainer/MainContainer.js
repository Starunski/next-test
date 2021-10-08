import Link from "next/link";
import Head from "next/head";

export default function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <title>DIMA-success</title>
        <link rel="icon" href="/favicon.ico" />
        <meta keywords={"DIMA-success " + keywords}></meta>
      </Head>
      <div>
        <Link href="/">
          <a>main</a>
        </Link>

        <Link href="/users">
          <a>users</a>
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
}
