import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { Player } from '@lottiefiles/react-lottie-player';

// Assets
import Lottie from '../public/assets/animations/particles.json';
import Ethereum from '../public/assets/images/ethereum.svg';
import Cardano from '../public/assets/images/cardano.svg';
import Solana from '../public/assets/images/solana.svg';
import Bitcoin from '../public/assets/images/bitcoin.svg';
import { cryptoInstance } from '../api/instances';

export default function Home({ coins, news }) {
    let lastNews = [];

    for (let i = 0; i < 3; i++) {
        lastNews.push(news[i]);
    }

    return (
        <>
            <Head>
                <title>Coinpare</title>
                <meta name='description' content='Get main information about cryptocurrencies' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {/* Hero */}
            <section className='w-full h-auto md:h-full max-h-screen flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-32'>
                    <div className='flex justify-center pt-44 pb-24 xl:gap-10'>
                        <div className='w-full lg:w-1/2 flex flex-col'>
                            <div className='flex gap-3 items-center text-blue-brand-100'>
                                <p>Discover we sources of data</p>
                                <IoArrowForwardOutline />
                            </div>
                            <h1 className='text-3xl md:text-5xl xl:text-6xl font-semibold text-dark-brand my-4 md:my-6'>
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
                        <div className='w-1/2 hidden lg:flex justify-end items-start relative'>
                            <div className='flex justify-center xl:-translate-y-10 absolute z-0'>
                                <Player
                                    src={Lottie}
                                    autoplay
                                    loop
                                    className='w-full xl:w-550'
                                />
                            </div>
                            <div className='w-550 h-full flex justify-center items-start'>
                                <div className='w-12 h-12 xl:w-14 xl:h-14 translate-y-44'>
                                    <Image src={Cardano} layout='fill' alt='Cardano' />
                                </div>
                                <div className='w-12 h-12 xl:w-14 xl:h-14 translate-y-60 xl:translate-y-64'>
                                    <Image src={Bitcoin} layout='fill' alt='Bitcoin' />
                                </div>
                                <div className='w-12 h-16 xl:w-14 xl:h-20 translate-y-24'>
                                    <Image src={Ethereum} layout='fill' alt='Ethereum' />
                                </div>
                                <div className='w-12 h-12 xl:w-14 xl:h-14 translate-y-48 xl:translate-y-52 '>
                                    <Image src={Solana} layout='fill' alt='Solana' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main cryptos */}
            <section className='w-full h-auto md:h-full max-h-screen flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto md:px-10 lg:px-20 py-6'>
                    <div className='flex justify-center'>
                        <table className='w-full'>
                            <tbody className='w-full border-t lg:border-0 border-gray-brand-50'>
                                <tr className='w-full hidden lg:flex justify-start border-b lg:border border-gray-brand-50 p-4 rounded-t'>
                                    <th className='w-1/12 flex justify-start items-center font-normal text-gray-brand-100'>
                                        #
                                    </th>
                                    <th className='w-6/12 flex justify-start items-center font-normal text-gray-brand-100'>
                                        Name
                                    </th>
                                    <th className='w-2/12 flex justify-start items-center font-normal text-gray-brand-100'>
                                        Price
                                    </th>
                                    <th className='w-2/12 flex justify-start items-center font-normal text-gray-brand-100'>
                                        Last market
                                    </th>
                                    <th className='w-1/12 flex justify-start items-center font-normal text-gray-brand-100'>
                                        Start
                                    </th>
                                </tr>
                                {coins.map((coin, i) => (
                                    <tr
                                        key={i}
                                        className={`flex justify-between lg:justify-start border-b ${
                                            i == 4 ? 'lg:rounded-b' : null
                                        } lg:border-r lg:border-l border-gray-brand-50 px-4`}
                                    >
                                        <td className='w-1/12 hidden lg:flex items-center'>
                                            {i + 1}
                                        </td>
                                        <td className='lg:w-6/12'>
                                            <div className='flex items-start lg:items-center gap-2 py-2'>
                                                <div className='w-10 h-10 relative'>
                                                    <Image
                                                        src={`https://www.cryptocompare.com${coin.DISPLAY.USD.IMAGEURL}`}
                                                        layout='fill'
                                                        alt='Logo'
                                                    />
                                                </div>
                                                <div className='flex flex-col lg:flex-row lg:gap-2'>
                                                    <span className=''>
                                                        {coin.CoinInfo.FullName}
                                                    </span>
                                                    <span className='font-light text-gray-brand-200'>
                                                        {coin.CoinInfo.Name}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='lg:w-2/12'>
                                            <div className='h-full flex flex-col lg:flex-row justify-end lg:justify-start lg:items-center py-2'>
                                                <span className='text-right lg:text-left'>
                                                    {coin.RAW.USD.PRICE.toLocaleString(
                                                        'en-US',
                                                        {
                                                            style: 'currency',
                                                            currency: 'USD',
                                                        }
                                                    )}{' '}
                                                    USD
                                                </span>
                                                <span className='lg:hidden capitalize text-right text-gray-brand-200'>
                                                    {coin.RAW.USD.LASTMARKET}
                                                </span>
                                            </div>
                                        </td>
                                        <td className='w-2/12 hidden lg:flex items-center capitalize text-gray-brand-200'>
                                            {coin.RAW.USD.LASTMARKET}
                                        </td>
                                        <td className='w-1/12 hidden lg:flex items-center'>
                                            <Link href='/compare'>
                                                <a className='w-16 h-8 flex justify-center items-center bg-blue-brand-100 text-sm text-white rounded-lg'>
                                                    Start
                                                </a>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            {/* News */}
            <section className='w-full h-auto md:h-full max-h-screen flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                    <div className='flex flex-col items-center py-6'>
                        <div className='flex flex-col md:flex-row md:gap-6 xl:gap-10'>
                            {lastNews.map((item, i) => (
                                <div
                                    key={i}
                                    className='w-full h-52 lg:h-72 flex flex-col justify-between border border-gray-brand-50 p-4 lg:p-6 mb-6 rounded'
                                >
                                    <div className='w-full flex flex-col'>
                                        <Link href={item.url}>
                                            <a className='lg:text-lg font-semibold text-blue-brand-100 line-clamp-2 mb-2'>
                                                {item.title}
                                            </a>
                                        </Link>
                                        <p className='box text-sm text-dark-brand line-clamp-3 lg:line-clamp-4 mb-2'>
                                            {item.body}
                                        </p>
                                    </div>
                                    <div className='flex justify-between lg:flex-col lg:gap-4 items-center lg:items-start'>
                                        <Link href={item.url}>
                                            <a className='w-20 h-8 lg:h-7 flex justify-center items-center bg-white text-xs text-blue-brand-100 border border-blue-brand-100 rounded-lg lg:rounded'>
                                                Read more
                                            </a>
                                        </Link>
                                        <div className='flex flex-row items-center gap-2'>
                                            <div className='w-10 h-10 lg:w-8 lg:h-8 relative rounded-full overflow-hidden'>
                                                <Image
                                                    src={`${item.source_info.img}`}
                                                    layout='fill'
                                                    alt='Source logo'
                                                />
                                            </div>
                                            <span className='hidden lg:flex capitalize'>
                                                {item.source_info.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href='/compare'>
                            <a className='w-full md:w-40 h-12 lg:h-10 flex justify-center items-center bg-white text-sm text-blue-brand-100 border border-blue-brand-100 rounded-lg'>
                                View all news
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export const getServerSideProps = async () => {
    const coins = await cryptoInstance.get('/top/mktcapfull?limit=5&tsym=USD');

    const news = await cryptoInstance.get('/v2/news/?lang=EN');

    return {
        props: {
            coins: coins.data.Data,
            news: news.data.Data,
        },
    };
};
