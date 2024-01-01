import React, { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';

interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
  category: string;
}

interface QuestionPageProps {
  question: Question;
  index: number;
}

const QuestionPage: React.FC<QuestionPageProps> = ({ question, index }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const { text, options, correctAnswer, category } = question;

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const isCorrect = option.toString() === correctAnswer.toString();
    if (isCorrect) {
      setScore(score + 10);
    }

    // setTimeout(() => {
    //   setSelectedOption(null);
    // }, 1000);
  };

  console.log(score);

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
              className={`border shadow-md p-3 text-center rounded-xl flex justify-center items-center gap-2 cursor-pointer ${
                selectedOption === singleOption ? 'bg-gray-300' : ''
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

      <div className=""></div>
    </div>
  );
};

export default QuestionPage;
