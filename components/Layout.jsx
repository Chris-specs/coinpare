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
            <header className='w-full h-14 flex justify-center items-center border-b border-gray-300'>
                <div className='w-full max-w-screen-2xl h-auto px-6 md:px-10 lg:px-20'>
                    <div className='flex justify-between items-center'>
                        <Link href='/'>
                            <a className='text-2xl font-medium text-blue-brand'>
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
                </div>
            </header>
            {showMenu ? (
                <div className='w-full h-[calc(100vh-3.5rem)] bg-white z-10 absolute transform ease-in duration-300'>
                    <ul className='w-full flex flex-col justify-center px-6 pt-2'>
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
                                <a className='w-full h-full flex justify-center items-center font-medium text-white bg-blue-brand rounded-lg'>
                                    Get Started
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : null}
            <main className='z-0 relative'>{children}</main>
            <footer className='bg-blue-brand'>footer</footer>
        </>
    );
};

export default Layout;
