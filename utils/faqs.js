import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

const Repository = () => (
    <Link href='https://github.com/Chris-specs/coinpare'>
        <a
            target='_blank'
            className='flex gap-1 items-center text-sm lg:text-base font-medium text-blue-brand-100 py-2'
        >
            <IoLogoGithub className='text-lg md:text-base text-dark-brand' /> Coinpare
        </a>
    </Link>
);
const Author = () => (
    <Link href='https://github.com/Chris-specs'>
        <a
            target='_blank'
            className='flex gap-1 items-center text-sm lg:text-base font-medium text-blue-brand-100'
        >
            <IoLogoGithub className='text-lg md:text-base text-dark-brand' /> Christian
            Sanchez
        </a>
    </Link>
);

const faqs = [
    {
        name: 'What is coinpare?',
        description: {
            text: 'Coinpare is a project created by Christian Sanchez to the all people get main information like market cap, supply or simply price to the cryptocurrencies in the main fiat currencies and discover lastest news about crypto world.',
            components: null,
        },
    },
    {
        name: 'Coinpare it´s free?',
        description: {
            text: 'Yes, coinpare is free and non-profit project.',
            components: null,
        },
    },
    {
        name: 'Where we get data about cryptocurrencies?',
        description: {
            text: 'We get data about cryptocurrencies from main exchanges and news sources. Some are coinbase, kraken, binance, gemini, bitso and more.',
            components: null,
        },
    },
    {
        name: 'Where is the source code about coinpare?',
        description: {
            text: 'You find the source code about coinpare in this repository of GitHub.',
            components: [<Repository />, <Author />],
        },
    },
];

export default faqs;
