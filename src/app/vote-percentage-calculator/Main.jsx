'use client';

import React, { useState } from "react";

const Main = () => {
  const [duplicateCount, setDuplicateCount] = useState(3);
  const [totalVotes, setTotalVotes] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const createDuplicate = () => {
    setDuplicateCount((prevCount) => prevCount + 1);
  };

  const calculate = () => {
    // Get all the input values using refs
    const inputValues = Array.from({ length: duplicateCount }, (_, index) => {
      return Number(document.getElementById(`input-${index}`).value) || 0;
    });

    // Calculate the total votes
    const newTotalVotes = inputValues.reduce((sum, value) => sum + value, 0);
    setTotalVotes(newTotalVotes);

    // Calculate the percentage
    const totalVotersInPakistan = 128585760; // You may want to update this with the actual total voters
    const newPercentage = (newTotalVotes / totalVotersInPakistan) * 100;
    setPercentage(newPercentage);
  };

  return (
    <div className="bg-white dark:bg-dark py-2 mb-5 rounded-md flex flex-col items-center justify-center">
      <div className="h-full w-full flex flex-col md:flex-row items-start justify-center gap-2">
        <div className="w-full h-full px-2 flex flex-col items-center justify-center">
          <h3 className="text-[15px] leading-none text-center">Input</h3>
          <div className="text-xs leading-none flex items-center justify-between gap-x-2">
            <span className="w-20">Candidates</span>  <span className="w-full text-center">Total votes per candidate</span>
          </div>
          {[...Array(duplicateCount)].map((_, index) => (
            <div key={index} className="flex items-center justify-center gap-x-2 gap-y-3 p-2">
              <span className="w-20 font-bold">{index + 1}.</span>
              <input id={`input-${index}`} type="number" onChange={calculate} placeholder="votes" className="w-full text-sm outline-none p-2 bg-grey dark:bg-darkBlack rounded-md" />
            </div>
          ))}

          <button onClick={createDuplicate} className="flex items-center justify-center bg-grey dark:bg-darkBlack duration-200 hover:bg-white hover:dark:bg-dark b p-2 mt-2 w-full border border-bd dark:border-bdDark rounded-md">
            <i className="-mb-1 fi fi-br-plus"></i>
          </button>
        </div>

        <div className="w-full h-full px-2 flex flex-col items-center justify-center">
          <h3 className="text-[15px] leading-none">OutPut</h3>
          <div className="min-h-full my-5 flex flex-col items-center justify-center">

            <div className="p-2 h-full flex flex-col items-center justify-center mb-5">
              <div className="text-[50px] font-bold ">
                {percentage.toFixed(2)}%
              </div>
              <div className="text-sm tracking-[1px] leading-[1.4]"><b>Vote Percentage</b></div>
            </div>
            <div className="h-full w-full grid grid-cols-2 place-items-center">
              <div className="p-2 flex flex-col items-center justify-center">
                <div className="text-2xl lg:text-4xl font-bold mb-2">
                  {totalVotes}
                </div>
                <div className="text-xs tracking-[1px] leading-[1.4]"><b>Total Votes you got</b></div>
              </div>
              <div className="p-2 flex flex-col items-center justify-center">
                <div className="text-2xl lg:text-4xl font-bold mb-2">
                  128,585,760
                </div>
                <div className="text-xs tracking-[1px] leading-[1.4]"><b>Total Voters in Pakistan</b></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
