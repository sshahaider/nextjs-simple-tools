import { caseConvertersList } from '@/lib/utails';
import Link from 'next/link';
import React from 'react';

const TextConverters = ({ pathname }) => {

    const filteredConverters = caseConvertersList.filter(item => item.link !== pathname);

    return <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4'>
        {filteredConverters.map((item) =>
            <Link
                key={item.link}
                href={item.link}
                className="group rounded-lg border border-transparent px-5 pb-4  flex flex-col justify-center items-start transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
                <h3 className="mb-3 text-2xl font-semibold">
                    to {item.title}{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h3>
                <p title={item.dec} className="m-0 max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-sm">
                    <span className='opacity-80'> E.g: </span> <span className='opacity-50'>{item.dec}</span>
                </p>
            </Link>
        )}
    </div>
}

export default TextConverters
