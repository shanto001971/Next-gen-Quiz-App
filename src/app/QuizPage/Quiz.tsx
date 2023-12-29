// Import necessary React and Redux hooks
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setQuestions, submitAnswer, resetQuiz } from '../../store/quizSlice';

const Quiz = () => {
    const dispatch = useDispatch();
    const { currentCategory, questions, currentQuestionIndex, userAnswers } = useSelector((state) => state.quiz);

    const [selectedOption, setSelectedOption] = useState('');
    const [timer, setTimer] = useState(60); // Set the initial timer value (in seconds)
    const timerRef = useRef(null);

    const categories = ['General Knowledge', 'Science', 'History']; // Replace with actual data
       

    useEffect(() => {
        // Fetch quiz data (categories and questions) here from your API
        const questions = [
            {
                id: '1',
                text: 'Question 1?',
                options: ['Option A', 'Option B', 'Option C'],
                correctAnswer: 'Option A'
            },
            {
                id: '1',
                text: 'Question 1?',
                options: ['Option A', 'Option B', 'Option C'],
                correctAnswer: 'Option A'
            },
            {
                id: '1',
                text: 'Question 1?',
                options: ['Option A', 'Option B', 'Option C'],
                correctAnswer: 'Option A'
            },
            {
                id: '1',
                text: 'Question 1?',
                options: ['Option A', 'Option B', 'Option C'],
                correctAnswer: 'Option A'
            }
            // Add more questions
        ]; // Replace with actual data

        dispatch(setQuestions(questions));
    }, [dispatch]);

    useEffect(() => {
        // Set up and start the timer
        if (timer > 0 && currentCategory && questions.length > 0 && currentQuestionIndex < questions.length) {
            timerRef.current = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }

        // Clean up the timer on component unmount
        return () => {
            clearInterval(timerRef.current);
        };
    }, [timer, currentCategory, questions, currentQuestionIndex]);

    const handleCategoryChange = (category) => {
        dispatch(setCategory(category));
        setTimer(60); // Reset the timer when changing the category
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        dispatch(submitAnswer(selectedOption));
        setSelectedOption('');
        setTimer(60); // Reset the timer for the next question
    };

    const handleFinishQuiz = () => {
        // Calculate the user's score
        const score = calculateScore();
      
        // Display the score (you can replace this with your desired way of presenting the score)
        alert(`Your Score: ${score}`);
      
        // Reset the quiz state and timer
        dispatch(resetQuiz());
        setTimer(60); // Reset the timer when finishing the quiz
      };

      const calculateScore = () => {
        // Assuming questions have a property named 'correctAnswer'
        const correctAnswers = questions.filter((question, index) => {
          return question.correctAnswer === userAnswers[index];
        });
      
        // Calculate the score based on the number of correct answers and time remaining
        const baseScore = correctAnswers.length; // Each correct answer contributes to the score
        const timeBonus = Math.max(0, timer / 10); // Add a time bonus (adjust the divisor as needed)
      
        // Total score calculation
        const totalScore = baseScore + timeBonus;
      
        return totalScore;
      };

    return (
        <div className="max-w-2xl mx-auto p-8 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Quiz</h2>
            {currentCategory ? (
                <div>
                    <h3 className="text-xl font-bold mb-2">{currentCategory}</h3>
                    <p className="mb-2">Question {currentQuestionIndex + 1}/{questions.length}</p>
                    <p className="mb-2">Time left: {timer} seconds</p>
                    {/* Add a conditional check for questions */}
                    <p className="mb-4">{questions?.[currentQuestionIndex]?.text}</p>
                    <div>
                        {questions?.[currentQuestionIndex]?.options.map((option) => (
                            <button
                                key={option}
                                className={`m-2 p-4 text-lg cursor-pointer rounded-md ${selectedOption === option ? 'bg-green-500 text-white' : ''}`}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        className="m-2 p-4 text-lg cursor-pointer bg-blue-500 text-white"
                        onClick={handleNextQuestion}
                        disabled={!selectedOption || timer === 0}
                    >
                        Next
                    </button>
                    {currentQuestionIndex === questions.length - 1 && (
                        <button
                            className="m-2 p-4 text-lg cursor-pointer bg-blue-500 text-white"
                            onClick={handleFinishQuiz}
                        >
                            Finish
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    <h3 className="text-xl font-bold mb-2">Choose a Category</h3>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="m-2 p-4 text-lg cursor-pointer bg-blue-500 text-white"
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Quiz;
