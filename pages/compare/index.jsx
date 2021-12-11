import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import Loader from '../../public/assets/animations/loader.json';

import { useEffect, useState } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { cryptoInstance } from '../../api/instances';

const Compare = ({ coins }) => {
    const initialState = {
        currency: '',
        coin: '',
    };

    const [compareData, setCompareData] = useState(initialState);
    const [coinData, setCoinData] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const getInfo = async () => {
        if (compareData.coin && compareData.currency != '') {
            try {
                setLoading(true);
                const response = await cryptoInstance.get(
                    `/pricemultifull?fsyms=${compareData.coin}&tsyms=${compareData.currency}`
                );
                setCoinData(
                    response.data.RAW[compareData.coin][compareData.currency]
                );
                console.log('COIN DATA => ', response.data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            } catch (error) {}
        }
    };

    const currencies = [
        {
            name: 'USA dollar',
            code: 'USD',
        },
        {
            name: 'Euro',
            code: 'EUR',
        },
        {
            name: 'Mexican peso',
            code: 'MXN',
        },
        {
            name: 'Pound sterling',
            code: 'GBP',
        },
        {
            name: 'Japanese yen',
            code: 'JPY',
        },
        {
            name: 'Canadian dollar',
            code: 'CAD',
        },
        {
            name: 'Swiss franc',
            code: 'CHF',
        },
        {
            name: 'Australian dollar',
            code: 'AUD',
        },
        {
            name: 'Chinese renminbi',
            code: 'CNY',
        },
    ];

    return (
        <>
            <Head>
                <title>Compare</title>
                <meta
                    name='description'
                    content='Compare prices of the main cryptocurrencies'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='w-full h-auto md:h-full max-h-screen flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                    <div className='flex flex-col pt-20 py-6 gap-4'>
                        <div className='w-full h-72 border border-blue-brand-100 p-4 rounded-lg'>
                            {loading ? (
                                <div className='w-full flex justify-center items-center'>
                                    <Player
                                        src={Loader}
                                        autoplay
                                        loop
                                        className='w-10/12 xl:w-550'
                                    />
                                </div>
                            ) : coinData == undefined ? (
                                <div>
                                    <p>Not have information</p>
                                </div>
                            ) : (
                                <div>
                                    <p>Information</p>
                                </div>
                            )}
                        </div>
                        <div className='flex justify-center items-center'>
                            <IoArrowForwardOutline className='-rotate-90' />
                        </div>
                        <div className='w-full flex items-center'>
                            <div className='flex flex-wrap justify-between gap-2'>
                                {currencies.map((currency, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setCompareData(
                                                (compareData = {
                                                    ...compareData,
                                                    currency: currency.code,
                                                })
                                            );
                                            getInfo();
                                        }}
                                        className={`w-24 h-16 ${
                                            currency.code ==
                                                compareData.currency &&
                                            'bg-blue-brand-100 text-white'
                                        } text-sm font-medium text-dark-brand border border-blue-brand-100 p-3 rounded-lg`}
                                    >
                                        {currency.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <IoArrowForwardOutline className='-rotate-90' />
                        </div>
                        <div className='w-full flex items-center overflow-x-auto scrollbar-hidden'>
                            <div className='flex justify-center gap-2'>
                                {coins.map((coin, i) => (
                                    <button
                                        onClick={() => {
                                            setCompareData(
                                                (compareData = {
                                                    ...compareData,
                                                    coin: coin.CoinInfo.Name,
                                                })
                                            );
                                            getInfo();
                                        }}
                                        key={i}
                                        className={`w-28 h-28 flex flex-col justify-between  ${
                                            coin.CoinInfo.Name ==
                                                compareData.coin &&
                                            'bg-blue-brand-100'
                                        }  border border-blue-brand-100 p-3 rounded-lg`}
                                    >
                                        <div className='w-full flex justify-between'>
                                            <p
                                                className={`w-3/4 text-sm font-medium text-dark-brand ${
                                                    coin.CoinInfo.Name ==
                                                        compareData.coin &&
                                                    'text-white'
                                                } text-left`}
                                            >
                                                {coin.CoinInfo.FullName}
                                            </p>
                                            <div className='w-6 h-6 relative'>
                                                <Image
                                                    src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                                                    layout='fill'
                                                    alt='Crypto logo'
                                                />
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <p
                                                className={`w-3/4 flex flex-col text-xs text-dark-brand ${
                                                    coin.CoinInfo.Name ==
                                                        compareData.coin &&
                                                    'text-white'
                                                }`}
                                            >
                                                {coin.RAW.USD.PRICE.toLocaleString(
                                                    'en-US',
                                                    {
                                                        style: 'currency',
                                                        currency: 'USD',
                                                    }
                                                )}{' '}
                                                <span className='text-xxs text-left'>
                                                    USD
                                                </span>
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Compare;

export const getServerSideProps = async () => {
    const coins = await cryptoInstance.get('/top/mktcapfull?limit=5&tsym=USD');
    return {
        props: {
            coins: coins.data.Data,
        },
    };
};
