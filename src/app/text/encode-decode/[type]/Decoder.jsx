'use client';

import React, { useState } from "react"
import Tooltip from '@/components/Tooltip';


const Decoder = ({ type, title }) => {

    const [text, setText] = useState('');
    const [convertedText, setConvertedText] = useState('');
    const [copied, setCopied] = useState(false);


    const encodeText = (inputText, conversionType) => {
        switch (conversionType) {
            case 'utf-8':
                return new TextEncoder().encode(inputText);
            case 'utf-16':
                return new TextEncoder('utf-16').encode(inputText);
            default:
                return inputText;
        }
    }
    
    const decodeText = (inputText, conversionType) => {
        switch (conversionType) {
            case 'utf-8':
                const array = inputText.split(',');
                const uint8Array = new Uint8Array(array);
                const arrayBuffer = uint8Array.buffer;
                const en = new TextDecoder(conversionType);
                const decoded = en.decode(arrayBuffer);
                if (decoded.length > 1) {
                    return decoded;
                } else {
                    return 'utf-8 is not Valid';
                }
            case 'utf-16':
                const uint16Array = new Uint16Array(inputText.split(',')).buffer;
                const utf16Decoder = new TextDecoder('utf-16');
                return utf16Decoder.decode(uint16Array);
            default:
                return inputText;
        }
    }



    const handleEncode = async () => {
        const converted = await encodeText(text, type);
        setConvertedText(converted);
    }
    const handleDecode = () => {
        const converted = decodeText(text, type);
        setConvertedText(converted);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);
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
        a.download = `${title} decoded Text from YFBTools.com .txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    const shareData = {
        title: `${title} Text`,
        text: convertedText,
        url: `https://yfbtools.com/text/encode-decode/${type}`
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
                        onChange={handleChange} ></textarea>
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
            <div className="flex items-center justify-center gap-x-2">
                <button className='rounded-full px-5 my-2 py-2  hover:border-main border-2 border-bd dark:border-bdDark bg-transparent flex items-center justify-center gap-x-2'
                    onClick={handleEncode}>
                    <i className="-mb-1 fi fi-br-shuffle"></i> Encode
                </button>
                <button className='rounded-full px-5 my-2 py-2  hover:border-main border-2 border-bd dark:border-bdDark bg-transparent flex items-center justify-center gap-x-2'
                    onClick={handleDecode}>
                    <i className="-mb-1 fi fi-br-shuffle"></i> Decode
                </button>
            </div>
        </div>
    )
}

export default Decoder;
