import React from 'react'
import Logo from './Logo';
import Sidebar from './Sidebar';
import Link from 'next/link';

const Header = () => {


    return (
        <header className='sticky top-0 flex items-center justify-center h-[60px] w-full z-50 bg-white dark:bg-dark'>
            <nav className="flex items-center justify-between px-4 lg:px-6 py-2.5 w-full ">
                <div className='flex items-center'>
                    <Logo />
                </div>

                <div className='flex items-center justify-center gap-x-2'>
                    <Link
                        className="h-8 w-8 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 rounded-md duration-150"
                        href="https://github.com/sshahaider/nextjs-neumorphism-generator">
                        <i className='fi fi fi-brands-github -mb-1' />
                    </Link>
                    <Sidebar />
                </div>
            </nav>
        </header >
    )
}

export default Header;
