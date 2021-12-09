import Link from 'next/link';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

const Layout = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    const links = [
        {
            name: 'Compare',
            url: '/compare',
        },
        {
            name: 'News',
            url: '/news',
        },
        {
            name: 'About',
            url: '/about',
        },
    ];

    return (
        <>
            <header className='w-full flex justify-center items-center bg-white fixed top-0 z-10  border-b border-gray-200'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                    <div className='flex h-14 justify-between items-center'>
                        <Link href='/'>
                            <a className='text-2xl font-medium text-blue-brand-100'>
                                coinpare
                            </a>
                        </Link>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className=''
                        >
                            {showMenu ? (
                                <IoClose className='text-3xl text-dark-brand' />
                            ) : (
                                <IoMenu className='text-3xl text-dark-brand' />
                            )}
                        </button>
                    </div>
                    {showMenu ? (
                        <div className='w-full h-[calc(100vh-3.5rem)] bg-white z-10'>
                            <ul className='w-full flex flex-col justify-center px-6 pt-2 animate-fade-down'>
                                {links.map((link, i) => (
                                    <li
                                        key={i}
                                        className='w-full h-12 flex justify-center items-center'
                                    >
                                        <Link href={link.url}>
                                            <a className='font-medium text-dark-brand'>
                                                {link.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                                <li className='w-full h-12 flex justify-center items-center'>
                                    <Link href='/compare'>
                                        <a className='w-full h-full flex justify-center items-center font-medium text-white bg-blue-brand-100 rounded-lg'>
                                            Get Started
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
            </header>

            <main className='z-0 relative'>{children}</main>
            <footer className='py-4 border-t border-gray-200'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                    <div className='flex flex-col py-4 gap-5'>
                        <div className='flex flex-col justify-start gap-3'>
                            <p className='text-3xl font-medium text-blue-brand-100'>
                                coinpare
                            </p>
                            <p className='text-sm text-gray-brand-100'>
                                Get information and compare <br /> prices of the
                                main cryptocurrencies.
                            </p>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-lg font-medium text-blue-brand-50'>
                                Tools
                            </p>
                            <ul>
                                <li>
                                    <a
                                        href='/compare'
                                        className='text-blue-brand-50 opacity-70'
                                    >
                                        Compare
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='/compare'
                                        className='text-blue-brand-50 opacity-70'
                                    >
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col justify-start gap-1'>
                            <p className='text-lg font-medium text-blue-brand-50'>
                                Information
                            </p>
                            <ul>
                                <li>
                                    <a
                                        href='/compare'
                                        className='text-blue-brand-50 opacity-70'
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='/compare'
                                        className='text-blue-brand-50 opacity-70'
                                    >
                                        FAQ's
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-xs text-gray-brand-100'>
                            2021 Coinpare
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
