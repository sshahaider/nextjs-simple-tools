'use client';

import React, { useState } from "react"
import Tooltip from '@/components/Tooltip';

const Main = () => {
    const [text, setText] = useState('');
    const [words, setWords] = useState(0);
    const [letters, setLetters] = useState(0);
    const [charactersWithoutSpace, setCharactersWithoutSpace] = useState(0);
    const [sentences, setSentences] = useState(0);
    const [paragraphs, setParagraphs] = useState(0);
    const [readingTime, setReadingTime] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCount = (e) => {
        const value = e.target.value;
        setText(value);

        // Calculate word count
        const wordCount = value.split(/\b\w+\b/g).filter(Boolean);
        setWords(wordCount.length);

        // Calculate letter count
        const letterCount = value.split('');
        setLetters(letterCount.length);

        // Calculate characters without space
        const charactersWithoutSpace = value.replace(/\s/g, '').length;
        setCharactersWithoutSpace(charactersWithoutSpace);

        // Calculate sentence count (assuming sentences end with '.', '!', or '?')
        const sentenceCount = value.split(/[.!?]/).filter(Boolean).length;
        setSentences(sentenceCount);

        // Calculate paragraph count (assuming paragraphs are separated by two line breaks)
        const paragraphCount = value.split('\n\n').filter(Boolean).length;
        setParagraphs(paragraphCount);

        // Calculate reading time (assuming an average reading speed of 200 words per minute)
        const wordsPerMinute = 200;
        const readingTime = wordCount.length / wordsPerMinute;

        // Format reading time to show one decimal place
        const formattedReadingTime = Math.floor(readingTime) + parseFloat((readingTime % 1).toFixed(1));


        setReadingTime(formattedReadingTime >= 0.6 ? Math.ceil(formattedReadingTime) : formattedReadingTime);
    };


    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    const clearText = () => {
        setText('');
        setWords(0);
        setLetters(0);
        setCharactersWithoutSpace(0);
        setSentences(0);
        setParagraphs(0);
        setReadingTime(0);

    }

    return (
        <div className="bg-white dark:bg-dark py-2 mb-5 rounded-md flex flex-col items-center justify-center">
            <div className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2">
                <div className="w-full h-full p-2">
                    <div className="w-full h-full px-2 flex items-center justify-between">
                        <h3 className="text-[15px] leading-none">Input Text</h3>
                        <div className="flex items-center gap-x-4">
                            <Tooltip text={'Copy Text'}>
                                <button className="text-xl" onClick={copyToClipboard}>
                                    <i className={` fi ${copied ? "fi-br-check-double" : "fi-rr-duplicate"} `}></i>
                                </button>
                            </Tooltip>
                            <Tooltip text={'Clear Text'}>
                                <button className="text-xl" onClick={clearText}>
                                    <i className="fi fi-br-cross-small"></i>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                    <textarea className="w-full h-[40vh] text-sm outline-none p-2 bg-grey dark:bg-darkBlack rounded-md"
                        value={text}
                        onChange={handleCount}></textarea>
                </div>

                <div className="w-full h-full px-2 flex flex-col items-center justify-center">
                    <h3 className="text-[15px] leading-none">OutPut</h3>
                    <div className=" h-full w-full grid grid-cols-2 place-items-center">
                        <div className="h-full p-2 flex flex-col items-center justify-center">
                            <div className="text-2xl lg:text-4xl font-bold mb-2">
                                {charactersWithoutSpace}
                            </div>
                            <div className="text-xs tracking-[1px] leading-[1.4]"><b>Letters</b></div>
                        </div>

                        <div className="h-full p-2 flex flex-col items-center justify-center">
                            <div className="text-2xl lg:text-4xl font-bold mb-2">
                                {words}
                            </div>
                            <div className="text-xs tracking-[1px] leading-[1.4]">Words</div>
                        </div>

                        <div className="h-full p-2 flex flex-col items-center justify-center">
                            <div className="text-2xl lg:text-4xl font-bold mb-2">
                                {letters}
                            </div>
                            <div className="text-xs tracking-[1px] leading-[1.4]">Letters (with space)</div>
                        </div>

                        <div className="h-full p-2 flex flex-col items-center justify-center">
                            <div className="text-2xl lg:text-4xl font-bold mb-2">
                                {sentences}
                            </div>
                            <div className="text-xs tracking-[1px] leading-[1.4]">Sentences</div>
                        </div>
                        <div className="h-full p-2 flex flex-col items-center justify-center">
                            <div className="text-2xl lg:text-4xl font-bold mb-2">
                                {paragraphs}
                            </div>
                            <div className="text-xs tracking-[1px] leading-[1.4]">Paragraphs</div>
                        </div>
                        <div className="h-full p-2 flex flex-col items-center justify-center">
                            <div className="text-2xl lg:text-4xl font-bold mb-2">
                                ~           {readingTime}
                            </div>
                            <div className="text-xs tracking-[1px] leading-[1.4]">Reading Time (min)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
