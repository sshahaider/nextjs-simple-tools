'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import ThemeChanger from './ThemeChanger';
import styles from './styles.module.css'
import useClickOutside from '../lib/ClickOutside';
import LinkItem from './LinkItem';
import DropDownItem from './DropDownItem';
const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const handleCheckboxChange = (e) => {
        setOpen(!open);
    };


    const links = [
        {
            title: 'Home',
            type: 'link',
            link: '/',
            icon: 'fi-bs-home'
        },
        {
            title: 'Text',
            type: 'dropdown',
            icon: 'fi-rr-text',
            links: [
                {
                    title: 'Convert Case',
                    link: '/text/case-converter',
                },
                {
                    title: 'Count Words',
                    link: '/text/count-words'
                },
                {
                    title: 'Count Letters',
                    link: '/text/count-letters'
                },
                {
                    title: 'Encode / Decode',
                    link: '/text/encode-decode'
                },
                {
                    title: 'Count Frequency',
                    link: '/text/letter-frequency-counter'
                },
            ]
        },
        {
            title: 'Vote Calculator',
            type: 'link',
            link: '/vote-percentage-calculator',
            icon: 'fi-rr-calculator'
        },
    ];

    const openRef = useClickOutside({ callback: setOpen });

    const pathname = usePathname();


    return <div ref={openRef}>

        <label className={`lg:hidden pt-1 ${styles.hamburger}`}>
            <input type="checkbox" onChange={handleCheckboxChange} checked={open} />
            <svg viewBox="0 0 32 32" className='stroke-black dark:stroke-white' style={{ width: '32px', height: '32px' }}>
                <path className={`${styles.line} ${styles.lineTopBottom}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className={styles.line} d="M7 16 27 16"></path>
            </svg>
        </label>

        <div className={` ${open ? 'left-0 ' : 'left-[-200%]'} duration-300 overflow-y-auto w-[60%] md:w-[30%]  lg:w-[15%] z-30 lg:block h-full fixed top-[58px] lg:left-0 bg-white dark:bg-dark`}>
            <div className='flex flex-col gap-x-2 mt-5 items-center px-2 min-h-[60vh] h-max '>
                {links.map((item, index) =>
                    item.type === 'link' ? <LinkItem key={index} item={item} />
                        : <DropDownItem key={index} item={item} />)}
            </div>

            <div className='flex items-center justify-center pt-4 pb-16 text-[12px] w-full px-2'>
               Build By <Link className='hover:underline font-bold' href="https://github.com/sshahaider">@sshahaider</Link>
            </div>

            <div className='w-full flex justify-center sticky bottom-[60px] py-[10px] bg-white dark:bg-dark px-2'>
                <ThemeChanger />
            </div>
        </div>
    </div>
}

export default Sidebar;