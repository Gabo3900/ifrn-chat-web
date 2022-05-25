import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chat de Infoweb</title>
        <meta name="description" content="Chat do curso de Infoweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <p>Chat de Infoweb</p>
          <Link href="/login"><button>Login</button></Link>
        </nav>
        <h1>Landing page do chat de Infoweb</h1>
      </main>
    </div>
  );
}
