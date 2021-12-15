import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import { cryptoInstance } from '../../api/instances';

const News = ({ coins, news }) => {
    let lastNews = [];

    for (let i = 0; i < 12; i++) {
        lastNews.push(news[i]);
    }

    return (
        <>
            <Head>
                <title>Coinpare - News</title>
                <meta name='description' content='Find lastest news' />
            </Head>
            {/* News */}
            <section className='w-full h-auto md:h-full flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='flex flex-col items-center pt-16 md:pb-10 md:pt-20'>
                        <div className='w-full flex items-center py-4'>
                            <h1 className='text-lg font-semibold text-blue-brand-100'>
                                Lastest news
                            </h1>
                        </div>
                        <div className='flex flex-col md:flex-row md:flex-wrap md:gap-6 xl:gap-10'>
                            {lastNews.map((item, i) => (
                                <div
                                    key={i}
                                    className='w-full md:w-[calc(33.333333%-1rem)] xl:w-[calc(33.333333%-1.69rem)] h-52 lg:h-72 flex flex-col justify-between border border-gray-brand-50 p-4 lg:p-6 mb-6 md:mb-0 rounded'
                                >
                                    <div className='w-full flex flex-col'>
                                        <Link href={item.url}>
                                            <a
                                                target='_blank'
                                                className='lg:text-lg font-semibold text-blue-brand-100 line-clamp-2 mb-2'
                                            >
                                                {item.title}
                                            </a>
                                        </Link>
                                        <p className='box text-sm text-dark-brand line-clamp-3 lg:line-clamp-4 mb-2'>
                                            {item.body}
                                        </p>
                                    </div>
                                    <div className='flex justify-between lg:flex-col lg:gap-4 items-center lg:items-start'>
                                        <Link href={item.url}>
                                            <a
                                                target='_blank'
                                                className='w-20 h-8 lg:h-7 flex justify-center items-center bg-white text-xs text-blue-brand-100 border border-blue-brand-100 rounded-lg lg:rounded'
                                            >
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
                    </div>
                </div>
            </section>
        </>
    );
};
export default News;

export const getServerSideProps = async () => {
    const news = await cryptoInstance.get('/v2/news/?lang=EN');

    return {
        props: {
            news: news.data.Data,
        },
    };
};
