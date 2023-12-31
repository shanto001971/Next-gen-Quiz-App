"use Client"
import React, { useState } from 'react';
import { GiCheckMark } from "react-icons/gi";



const questionPage = ({ question, index }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const { text, options, correctAnswer, category } = question;

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        const isCorrect = option.toString() === correctAnswer.toString();
        if (isCorrect) {
            setScore(score + 10);
        }

        // Add a delay before transitioning to the next question
        // setTimeout(() => {
        //   setSelectedOption(null);
        // }, 1000); // Adjust the delay duration as needed
    };

    console.log(score)


    return (
        <div className="">
            <div className="p-10 border rounded-md mt-5 shadow-md">
                <h1 className="text-xl font-medium">
                    Que:{index + 1} {text}
                </h1>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    {options?.map((singleOption, optionIndex) => (
                        <div
                            key={optionIndex}
                            className={`border shadow-md p-3 text-center rounded-xl flex justify-center items-center gap-2 cursor-pointer ${selectedOption === singleOption ? 'bg-gray-300' : ''
                                }`}
                            onClick={() => handleOptionClick(singleOption)}
                        >
                            <h1>{singleOption}</h1>
                            {selectedOption === singleOption && (
                                <GiCheckMark className="text-right text-green-500 w-5 h-5" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="">

            </div>
        </div>
    );
};

export default questionPage;