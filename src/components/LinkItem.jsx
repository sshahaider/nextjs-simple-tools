import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const LinkItem = ({ item}) => {
    const pathname = usePathname();
    const { title, link, icon } = item;

    return (
        <Link href={link} className={`my-1 w-full flex text-sm items-center justify-start gap-x-2 py-1.5 px-4 rounded-md hover:bg-black/10 hover:dark:bg-white/10 duration-200 ${link === pathname && "bg-black/10 dark:bg-white/10"}`}>
            <i className={`mt-1 fi ${icon}`}></i>{title}
        </Link>
    )
}
export default LinkItem;
