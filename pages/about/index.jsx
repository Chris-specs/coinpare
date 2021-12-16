import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
import { exchanges } from '../../utils';

const News = () => {
    return (
        <>
            <Head>
                <title>Coinpare - About</title>
                <meta name='description' content='About coinpare' />
            </Head>
            {/* News */}
            <section className='w-full h-auto md:h-full flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='flex flex-col items-center pt-16 md:pb-10 md:pt-20'>
                        <div className='w-full flex items-center py-4'>
                            <h1 className='text-lg lg:text-xl font-semibold text-blue-brand-100'>
                                About
                            </h1>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-sm lg:text-base mb-10'>
                                Coinpare is a project created by Christian
                                Sanchez to the all people get main information
                                like market cap, supply or simply price to the
                                cryptocurrencies in the main fiat currencies and
                                discover lastest news about crypto world.
                            </p>
                            <Link href='https://github.com/Chris-specs/coinpare'>
                                <a
                                    target='_blank'
                                    className='flex gap-1 items-center text-sm lg:text-base font-medium text-blue-brand-100 mb-2'
                                >
                                    <IoLogoGithub className='text-xl text-dark-brand' />{' '}
                                    Coinpare project repositorie
                                </a>
                            </Link>
                            <Link href='https://github.com/Chris-specs'>
                                <a
                                    target='_blank'
                                    className='flex gap-1 items-center text-sm lg:text-base font-medium text-blue-brand-100 mb-12'
                                >
                                    <IoLogoGithub className='text-xl text-dark-brand' />{' '}
                                    Christian Sanchez
                                </a>
                            </Link>
                            <p className='font-medium text-blue-brand-100'>
                                Where we get data about cryptocurrencies
                            </p>
                            <div className='w-full flex gap-y-2 justify-between md:justify-start lg:items-center flex-wrap my-4'>
                                {exchanges.map((exchange, i) => (
                                    <div
                                        key={i}
                                        className='w-40 md:w-28 h-9 flex items-center'
                                    >
                                        <div
                                            className={`${
                                                i == 4
                                                    ? 'w-28 md:w-24 h-9 md:h-8'
                                                    : 'w-32 md:w-24 h-6 md:h-4'
                                            } relative`}
                                        >
                                            <Image
                                                src={exchange.img}
                                                layout='fill'
                                                alt={exchange.alt}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div className='w-40 md:w-28 h-9 flex items-center relative'>
                                    <p className='text-lg font-semibold text-dark-brand'>
                                        +More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default News;

export async function getStaticProps(context) {
    return {
        props: {},
    };
}
