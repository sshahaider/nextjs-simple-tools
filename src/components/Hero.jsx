
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv, MotionH1, MotionP, } from './Motion';
import { fadeIn } from '@/lib/utails';

const Hero = () => {

    return (
        <section className="relative h-[90h] flex flex-col justify-center items-center md:px-5 py-5 lg:flex-row after:absolute after:right-0 after:-z-20 after:bg-gradient-radial after:h-[350px] after:w-[140px] after:md:w-[340px] after:md:translate-x-1/2 after:from-[#0FAFAF]/60 after:via-[#0FAFAF]/90 after:to-main  after:blur-2xl after:opacity-50 after:content-[''] after:mt-24" >
            <div className="flex flex-col items-center mb-12 md:mb-0 md:items-start justify-center mx-2 lg:w-1/2">
                <h1 className="bg-clip-text text-transparent dark:text-transparent bg-gradient-to-r from-[#0FAFAF]/60 to-main text-3xl text-center font-bold md:text-[60px]/[55px] md:text-left lg:max-w-[540px]">
                    Simplify tasks with our free tools
                </h1>
                <MotionP variants={fadeIn('up', 0.3)}
                    initial='hidden' transition={{ duration: 1, ease: 'easeInOut' }} animate='show' exit='hidden' className="mt-4 text-center md:text-xl lg:text-left">
                    Unleash the power of simplicity with our collection of hassle-free online tools, all designed to make your life easier.</MotionP>
                <MotionP variants={fadeIn('up', 0.6)}
                    initial='hidden' transition={{ duration: 1, ease: 'easeInOut' }} animate='show' exit='hidden' className="mt-4 text-[12px] opacity-60 text-center lg:text-left">
                    No Sign-ups, No Hidden Fees - Just Simplified Solutions. Explore Today!</MotionP>
                <MotionDiv variants={fadeIn('up', 0.8)}
                    initial='hidden' transition={{ duration: 1, ease: 'easeInOut' }} animate='show' exit='hidden' className="z-10 flex flex-row gap-y-2.5 mt-10 lg:mt-6 xl:mt-10">

                    <Link href='/#tools'
                        className="overflow-hidden rounded-full w-36 p-2 bg-black text-white border-none text-xl font-bold cursor-pointer relative z-10 group flex items-center justify-center"
                    >
                        Explore !
                        <span
                            className="absolute w-40 h-32 -top-8 -left-2 bg-white rotate-10 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                        ></span>
                        <span
                            className="absolute w-40 h-32 -top-8 -left-2 bg-[#0FAFAF]/50 rotate-10 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                        ></span>
                        <span
                            className="absolute w-40 h-32 -top-8 -left-2 bg-[#0FAFAF]/80 rotate-10 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                        ></span>
                        <span
                            className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-4 z-10 flex items-center justify-center gap-x-4"
                        >Below<i className="-mb-1 fi fi-br-chevron-double-down"></i></span>
                    </Link>

                </MotionDiv>
            </div>
            <MotionDiv variants={fadeIn('left', 0.2)}
                initial='hidden' transition={{ duration: 1, ease: 'easeInOut' }} animate='show' exit='hidden' className="lg:w-1/2 flex flex-col items-center justify-center">
                <Image
                    width={500}
                    height={500}
                    priority={false}
                    src='/hero.webp'
                    alt="the best tools website ever"
                />
            </MotionDiv>
        </section >
    )
}

export default Hero
