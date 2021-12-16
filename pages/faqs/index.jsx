import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoChevronDown } from 'react-icons/io5';
import { faqs } from '../../utils';

const Faqs = () => {
    const initialState = {
        show: false,
        index: undefined,
    };

    const [showAnswer, setShowAnswer] = useState(initialState);

    return (
        <>
            <Head>
                <title>Coinpare - About</title>
                <meta name='description' content='About coinpare' />
            </Head>
            {/* Faqs */}
            <section className='w-full h-auto md:h-full flex justify-center'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20 xl:px-44'>
                    <div className='flex flex-col items-center pt-16 md:pb-10 md:pt-20'>
                        <div className='w-full flex items-center py-4'>
                            <h1 className='text-lg lg:text-xl font-semibold text-blue-brand-100'>
                                FAQ´S
                            </h1>
                        </div>
                        <div className='w-full flex flex-col'>
                            <div className='w-full'>
                                {faqs.map((faq, i) => (
                                    <div key={i} className='w-full'>
                                        <button
                                            onClick={() =>
                                                setShowAnswer({
                                                    show: !showAnswer.show,
                                                    index: i,
                                                })
                                            }
                                            className={`w-full h-10 md:h-12 lg:h-14 flex justify-between items-center text-xs md:text-sm lg:text-base text-gray-brand-200 text-left ${
                                                i == 0
                                                    ? 'border border-b-1 rounded-t-md'
                                                    : i == 3
                                                    ? showAnswer.show
                                                        ? 'border border-t-0'
                                                        : 'border border-t-0 rounded-b-md'
                                                    : 'border border-t-0'
                                            } border-gray-brand-50 px-2 md:px-4`}
                                        >
                                            {faq.name}
                                            <IoChevronDown
                                                className={`${
                                                    showAnswer.show &&
                                                    showAnswer.index == i &&
                                                    'rotate-180'
                                                } transform transition-all ease-in-out duration-300`}
                                            />
                                        </button>
                                        {showAnswer.show &&
                                            showAnswer.index == i && (
                                                <div
                                                    className={`w-full flex items-center bg-gray-100 whitespace-pre-wrap ${
                                                        i == 0
                                                            ? 'border border-t-0'
                                                            : i == 3
                                                            ? 'border border-t-0 rounded-b-md'
                                                            : 'border border-t-0'
                                                    } border-gray-brand-50 px-2 py-4 md:px-4`}
                                                >
                                                    <p className='text-xs md:text-sm lg:text-base text-gray-brand-200'>
                                                        {faq.description.text}
                                                        {
                                                            faq.description
                                                                .components
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Faqs;

export async function getStaticProps() {
    return {
        props: {},
    };
}
