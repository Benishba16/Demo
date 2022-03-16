import Link from "next/link"
import Head from "next/head"
export default function Home() {
  return (
    <>
  <Head>
    <title>Next JS</title>
    <meta name="description" content="Home Page"/>
  </Head>
      <h1>Next JS</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  )
}
