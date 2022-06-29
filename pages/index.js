import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { AppButton } from '../src/components';

export default function Home() {
  const [user, setUser] = useState ({
    name: '',
    token: ''
  })

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
        </nav>
        {(!!user.token)
          ? <AppButton label="logout" href="/logout"/>
          : <AppButton label="login" href="/login"/>
        }
        <h1>Landing page do chat de Infoweb</h1>
      </main>
    </div>
  );
}
