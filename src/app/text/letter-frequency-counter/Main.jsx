'use client';

import React, { useState } from "react";

const LetterFrequencyCounter = () => {
    const [text, setText] = useState('');
    const [letterFrequency, setLetterFrequency] = useState({});

    const handleCount = (e) => {
        const value = e.target.value;
        setText(value);

        const frequency = {};
        let totalLetters = 0;
        for (let char of value) {
            if (char.match(/[a-zA-Z]/)) {
                char = char.toLowerCase();
                frequency[char] = (frequency[char] || 0) + 1;
                totalLetters++;
            }
        }
        for (let letter in frequency) {
            frequency[letter] = {
                count: frequency[letter],
                percentage: (frequency[letter] / totalLetters * 100).toFixed(2)
            };
        }
        
        // Sort the frequency object by count in descending order
        const sortedFrequency = Object.fromEntries(
            Object.entries(frequency).sort(([,a],[,b]) => b.count - a.count)
        );

        setLetterFrequency(sortedFrequency);
    };

    const clearText = () => {
        setText('');
        setLetterFrequency({});
    }

    return (
        <div className="bg-white dark:bg-dark py-2 mb-5 rounded-md flex flex-col items-center justify-center">
            <div className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2">
                <div className="w-full h-full p-2">
                    <div className="w-full h-full px-2 flex items-center justify-between">
                        <h3 className="text-[15px] leading-none">Input Text</h3>
                        <button className="text-xl" onClick={clearText}>
                            <i className="fi fi-br-cross-small"></i>
                        </button>
                    </div>
                    <textarea className="w-full h-[45vh] text-sm outline-none p-2 bg-grey dark:bg-darkBlack rounded-md"
                        value={text}
                        onChange={handleCount}></textarea>
                </div>

                <div className="w-full h-full px-2 flex flex-col items-center justify-center">
                    <h3 className="text-[15px] leading-none">Letter Frequency</h3>
                    <div className=" h-full w-full grid grid-cols-3 lg:grid-cols-4 gap-5 ">
                        {Object.entries(letterFrequency).slice(0, 20).map(([letter, { count, percentage }]) => (
                            <div key={letter} className="flex items-center justify-center gap-x-3 rounded-lg Border w-full">
                                <div className="text-3xl lg:text-4xl text-center font-bold leading-none w-[40%]">
                                    {letter.toUpperCase()}
                                </div>
                                <div className="flex items-start justify-center flex-col w-[60%]">
                                    <div className="text-sm  font-bold  leading-[1.4]">{count}</div>
                                    <div className="text-xs tracking-[1px] leading-[1.4]">{percentage}%</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetterFrequencyCounter;
