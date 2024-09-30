import { encodeDecodeList } from '@/lib/utails';
import Link from 'next/link';
import React from 'react';

const Decoders = ({ pathname }) => {

    const filteredConverters = encodeDecodeList.filter(item => item.link !== pathname);

    return <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4'>
        {filteredConverters.map((item, i) =>
            <Link
                key={i}
                href={item.link}
                className="group rounded-lg border border-gray-300 dark:border-neutral-700 px-5 flex flex-col justify-center items-start transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h3 className="text-2xl font-semibold">
                     {item.title}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h3>
            </Link>
        )}
    </div>
}

export default Decoders;
