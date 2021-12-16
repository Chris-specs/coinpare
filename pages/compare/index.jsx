import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import Loader from '../../public/assets/animations/loaderr.json';
import { currencies, convertion } from '../../utils';
import { IoArrowForwardOutline, IoCube } from 'react-icons/io5';
import { cryptoInstance } from '../../api/instances';

const Compare = () => {
    const initialState = {
        currency: '',
        coin: {
            name: '',
            code: '',
        },
    };

    const [coins, setCoins] = useState([]);
    const [loadingCoins, setLoadingCoins] = useState(true);
    const [compareData, setCompareData] = useState(initialState);
    const [coinData, setCoinData] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const loaders = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    const getInfo = async () => {
        if (compareData.coin && compareData.currency != '') {
            try {
                setLoading(true);
                const response = await cryptoInstance.get(
                    `/pricemultifull?fsyms=${compareData.coin.code}&tsyms=${compareData.currency}`
                );
                setCoinData(
                    response.data.DISPLAY[compareData.coin.code][
                        compareData.currency
                    ]
                );
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {}
        }
    };

    const getCoins = async () => {
        try {
            setLoadingCoins(true);
            const response = await cryptoInstance.get(
                '/top/mktcapfull?limit=10&tsym=USD'
            );
            setCoins(response.data.Data);
            setLoadingCoins(false);
        } catch (error) {}
    };

    useEffect(() => {
        getCoins();
        return () => {};
    }, []);

    return (
        <>
            <Head>
                <title>Coinpare - Compare cryptocurrencies</title>
                <meta
                    name='description'
                    content='Compare prices of the main cryptocurrencies'
                />
            </Head>
            <section className='w-full h-auto md:h-full flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-52'>
                    <div className='flex flex-col lg:h-full lg:flex-row-reverse lg:justify-center pt-20 lg:pt-28 py-6 gap-4'>
                        <div className='w-full lg:w-72 h-72 lg:h-full border border-blue-brand-100 py-4 lg:p-8 px-5 rounded-lg'>
                            {loading ? (
                                <div className='w-full h-full flex justify-center items-center'>
                                    <Player
                                        src={Loader}
                                        autoplay
                                        loop
                                        className='w-28 md:w-48'
                                    />
                                </div>
                            ) : coinData == undefined ? (
                                <div className='w-full h-full flex flex-col justify-center items-center'>
                                    <IoCube className='w-16 h-16 text-gray-brand-100 opacity-50' />
                                    <p className='text-gray-brand-100 opacity-70'>
                                        Get main info!
                                    </p>
                                    <IoArrowForwardOutline className='-rotate-90 text-gray-brand-100 opacity-70' />
                                    <p className='text-gray-brand-100 opacity-70'>
                                        Choose a currency
                                    </p>
                                    <IoArrowForwardOutline className='-rotate-90 text-gray-brand-100 opacity-70' />
                                    <p className='text-gray-brand-100 opacity-70'>
                                        Choose a crypto
                                    </p>
                                </div>
                            ) : (
                                <div className='flex flex-col items-center'>
                                    <p className='text-lg font-semibold text-dark-brand'>
                                        {compareData.coin.name}
                                    </p>
                                    <div className='w-12 h-12 relative mb-4 lg:mb-6'>
                                        <Image
                                            src={`https://www.cryptocompare.com${coinData.IMAGEURL}`}
                                            layout='fill'
                                            alt='Crypto logo'
                                        />
                                    </div>
                                    <div>
                                        <div className='w-full flex flex-col items-center lg:items-start'>
                                            {convertion.map((element, i) => (
                                                <p
                                                    key={i}
                                                    className={`lg:text-sm text-dark-brand ${
                                                        i == 0 && 'mb-4'
                                                    }`}
                                                >
                                                    {element.name}:{' '}
                                                    <span className='font-medium text-blue-brand-100 capitalize'>
                                                        {coinData[element.code]}
                                                    </span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='flex justify-center items-center'>
                            <IoArrowForwardOutline className='-rotate-90 md:rotate-0' />
                        </div>
                        <div className='w-full lg:w-36 flex items-center'>
                            <div className='lg:h-full flex lg:flex-col flex-wrap justify-between gap-2'>
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
                                        className={`w-24 lg:w-36 h-16 lg:h-12 ${
                                            currency.code ==
                                                compareData.currency &&
                                            'bg-blue-brand-100 text-white'
                                        } text-sm font-medium text-dark-brand border border-blue-brand-100 p-3 lg:p-0 rounded-lg`}
                                    >
                                        {currency.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <IoArrowForwardOutline className='-rotate-90 md:rotate-0' />
                        </div>
                        <div className='w-full lg:w-75 flex items-center overflow-x-auto scrollbar-hidden'>
                            <div className='flex justify-center lg:justify-start lg:flex-wrap gap-2'>
                                {loadingCoins
                                    ? loaders.map((coin, i) => (
                                          <div
                                              key={i}
                                              className='w-32 lg:w-36 h-28 lg:h-24 flex flex-col justify-between border border-blue-brand-100 p-3 rounded-lg animate-pulse'
                                          >
                                              <div className='w-full flex justify-between items-center'>
                                                  <span className='w-3/5 h-5 text-sm bg-gray-brand-50 opacity-70 text-left rounded-full'></span>
                                                  <span className='w-6 h-6 bg-gray-brand-50 opacity-70 rounded-full'></span>
                                              </div>
                                              <div className='flex flex-col gap-1'>
                                                  <span className='w-3/4 h-3 flex bg-gray-brand-50 opacity-70 rounded-full'></span>
                                                  <span className='w-1/4 h-3 flex bg-gray-brand-50 opacity-70 rounded-full'></span>
                                              </div>
                                          </div>
                                      ))
                                    : coins.map((coin, i) => (
                                          <button
                                              onClick={() => {
                                                  setCompareData(
                                                      (compareData = {
                                                          ...compareData,
                                                          coin: {
                                                              name: coin
                                                                  .CoinInfo
                                                                  .FullName,
                                                              code: coin
                                                                  .CoinInfo
                                                                  .Name,
                                                          },
                                                      })
                                                  );
                                                  getInfo();
                                              }}
                                              key={i}
                                              className={`w-32 lg:w-36 h-28 lg:h-24 flex flex-col justify-between  ${
                                                  coin.CoinInfo.Name ==
                                                      compareData.coin.code &&
                                                  'bg-blue-brand-100'
                                              }  border border-blue-brand-100 p-3 rounded-lg`}
                                          >
                                              <div className='w-full flex justify-between'>
                                                  <p
                                                      className={`w-3/4 text-sm font-medium text-dark-brand ${
                                                          coin.CoinInfo.Name ==
                                                              compareData.coin
                                                                  .code &&
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
                                                              compareData.coin
                                                                  .code &&
                                                          'text-white'
                                                      }`}
                                                  >
                                                      {coin.RAW &&
                                                          coin.RAW.USD.PRICE.toLocaleString(
                                                              'en-US',
                                                              {
                                                                  style: 'currency',
                                                                  currency:
                                                                      'USD',
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

export async function getStaticProps() {
    return {
        props: {},
    };
}
