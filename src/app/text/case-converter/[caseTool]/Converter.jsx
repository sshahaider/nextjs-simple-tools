'use client';

import React, { useState } from "react"
import Tooltip from '@/components/Tooltip';


const Converter = ({ type, title }) => {

    const [text, setText] = useState('');
    const [convertedText, setConvertedText] = useState('');
    const [copied, setCopied] = useState(false);
    const [words, setWords] = useState(0);
    const [letters, setLetters] = useState(0);



    const convertText = (inputText, conversionType) => {
        const capitalize = (text) => {
            const arr = text.split(" ");
            const capitalized = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
            return capitalized;
        }
        switch (conversionType) {
            case 'lowercase':
                return inputText.toLowerCase();
            case 'uppercase':
                return inputText.toUpperCase();
            case 'capitalizedcase':
            case 'titlecase':
            case 'startcase':
                return capitalize(inputText);
            case 'traincase':
                return capitalize(inputText).split(' ').join('-');
            case 'alternatingcase':
            case 'studly-capscase':
                return inputText.split('').map((char, index) =>
                    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                ).join('');
            case 'sentencecase':
                return inputText.split('.').map(sentence =>
                    sentence.trim().replace(/\b\w/g, (match, index) =>
                        index === 0 ? match.toUpperCase() : match.toLowerCase()
                    )
                ).join('. ');
            case 'camelcase':
                return inputText.replace(/\b\w/g, (match, index) =>
                    index === 0 ? match.toLowerCase() : match.toUpperCase()
                ).replace(/ /g, '');
            case 'pascalcase':
                return inputText.replace(/\b\w/g, match => match.toUpperCase()).replace(/ /g, '');
            case 'snakecase':
            case 'hyphencase':
            case 'kebabcase':
            case 'adacase':
            case 'macrocase':
            case 'screaming-snakecase':
                return inputText.toLowerCase().split(' ').join(conversionType === 'snakecase' ? '_' : '-');
            case 'dot-notationcase':
                return inputText.toLowerCase().split(' ').join('.');
            case 'cobolcase':
                return inputText.toUpperCase().split(' ').join('-');
            case 'pathcase':
                return inputText.split(' ').join('/');
            default:
                return inputText;
        }
    };


    const handleConvert = () => {
        const converted = convertText(text, type);
        setConvertedText(converted);
    }
    const handleCount = (e) => {
        const value = e.target.value
        setText(value);
        const wordCount = value.split(/\b\w+\b/g).filter(Boolean);
        setWords(wordCount.length);
        const letterCount = value.split('');
        setLetters(letterCount.length);
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(convertedText);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }


    const downloadTxtFile = () => {
        const blob = new Blob([convertedText], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = `${title} converted Text from yfbtools.com .txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const shareData = {
        title: `${title} Text`,
        text: convertedText,
        url: `https://yfbtools.com/text/case-conveter/${type}`
    };

    const ShareText = async () => {
        if (navigator.share) {
            await navigator.share(shareData)
        } else {
            return;
        }
    }


    const clearText = () => {
        setText('');
        setWords(0);
        setLetters(0);
    }

    return (
        <div className="bg-white dark:bg-dark py-2 rounded-md flex flex-col items-center justify-center">
            <div className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2">
                <div className="w-full h-full p-2">
                    <div className="w-full  h-full px-2 flex items-center justify-between">
                        <h3 className="text-[15px] leading-none">Input</h3>
                        <Tooltip text={'Clear Text'}>
                            <button className="text-xl" onClick={clearText}>
                                <i className="fi fi-br-cross-small"></i>
                            </button>
                        </Tooltip>
                    </div>
                    <textarea className="w-full h-[40vh] text-sm outline-none p-2 bg-grey dark:bg-darkBlack rounded-md"
                        value={text}
                        onChange={handleCount} ></textarea>
                    <p className="text-xs my-0 opacity-80">Total Words: {words} - Total Letters: {letters}</p>

                </div>

                <div className="w-full h-full p-2">
                    <div className="w-full h-full  px-2 flex items-center justify-between">
                        <h3 className="text-[15px] leading-none">Output</h3>
                        <div className="flex gap-x-5 text-lg">
                            <Tooltip text={'Share'}>
                                <button onClick={ShareText}>
                                    <i className='fi fi-br-share-square'></i>
                                </button>
                            </Tooltip>
                            <Tooltip text={'Download Txt File'}>
                                <button onClick={downloadTxtFile}>
                                    <i className='fi fi-br-download'></i>
                                </button>
                            </Tooltip>
                            <Tooltip text={'Copy Text'}>
                                <button onClick={copyToClipboard}>
                                    <i className={` fi ${copied ? "fi-br-check-double" : "fi-rr-duplicate"} `}></i>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                    <textarea className="w-full h-[40vh] text-sm outline-none p-2 bg-grey dark:bg-darkBlack rounded-md" value={convertedText} readOnly></textarea>
                </div>
            </div>
            <button className='rounded-full px-5 my-2 py-2  hover:border-main border-2 border-bd dark:border-bdDark bg-transparent flex items-center justify-center gap-x-2' onClick={handleConvert}>
                <i className="-mb-1 fi fi-br-shuffle"></i> Convert
            </button>
        </div>
    )
}

export default Converter;
