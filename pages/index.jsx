import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

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
                    <div className='flex justify-center pt-44 pb-24'>
                        <div className='w-full lg:w-1/2 flex flex-col'>
                            <div className='flex gap-3 items-center text-blue-brand-100'>
                                <p>Discover we sources of data</p>
                                <IoArrowForwardOutline />
                            </div>
                            <h1 className='text-3xl md:text-5xl font-semibold text-dark-brand my-4 md:my-6'>
                                Get information
                                <br />
                                and compare
                                <br />
                                prices of the main
                                <br />
                                cryptocurrencies
                            </h1>
                            <h2 className='text-sm md:text-xl md:font-medium text-dark-brand mb-16'>
                                Coinpare is the easiest place to get current
                                information about cryptocurrencies.
                            </h2>
                            <Link href='/compare'>
                                <a className='w-full md:w-1/2 h-14 flex justify-center items-center bg-blue-brand-100 text-white rounded-lg'>
                                    Get Started
                                </a>
                            </Link>
                        </div>
                        <div className='hidden lg:flex w-1/2'>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
