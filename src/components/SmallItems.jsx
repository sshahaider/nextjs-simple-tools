import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SmallItems = ({ item }) => {
    const pathname = usePathname();
    const { title, link } = item;
    return (
        <Link href={link} className={`flex items-center justify-start w-full text-sm py-[5px] px-3 rounded-md hover:bg-black/10 hover:dark:bg-white/10 duration-200 ${pathname.startsWith(link) && "bg-black/10 dark:bg-white/10"}`}>
            {title}
        </Link>
    )
}

export default SmallItems;
