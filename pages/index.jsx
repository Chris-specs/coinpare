import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Coinpare</title>
                <meta name='description' content='Download your Pokedex App' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='w-full h-auto md:h-full xl:h-screen max-h-screen'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                    <h1>Home</h1>
                </div>
                <Link href='/compare'>
                  <a>Compare</a>
                </Link>
            </section>
        </>
    );
}
