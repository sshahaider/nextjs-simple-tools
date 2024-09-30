import React, { useEffect, useState } from 'react';
import Arrow from './Arrow';
import SmallItems from './SmallItems';
import { usePathname } from 'next/navigation';

const DropDownItem = ({ item }) => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const { title, icon, links } = item;

    useEffect(() => {
        const isOpen = links.some(link => pathname.startsWith(link.link));
        setOpen(isOpen);
    }, [pathname, links]);

    return (
        <div className=' w-full'>
            <button onClick={() => setOpen(!open)} className={`my-1 text-sm relative flex items-center justify-start gap-x-2 py-1.5 px-4 w-full rounded-md hover:bg-black/10 hover:dark:bg-white/10  duration-200  border border-transparent ${open && "border-black/20 dark:border-white/20"}`}>
                <i className={`mt-1 fi ${icon}`}></i>{title} <span className='absolute right-4'><Arrow open={open} /></span>
            </button>
            <div className="flex flex-col items-center gap-y-1 w-full pl-2">
                {open && links.map(item =>
                    <SmallItems key={item.title} item={item} />)}
            </div>
        </div >
    )
}

export default DropDownItem;
