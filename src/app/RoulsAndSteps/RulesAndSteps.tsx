"use client"
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";

const RulesAndSteps = () => {
    const [countdown, setCountdown] = useState(3);
    const [showOverlay, setShowOverlay] = useState(false);
    // const router = useRouter();

    // useEffect(() => {
    //     let countdownInterval;

    //     if (countdown > 0 && showOverlay) {
    //         countdownInterval = setInterval(() => {
    //             setCountdown((prevCountdown) => prevCountdown - 1);
    //         }, 1000);
    //     } else if (countdown === 0 && showOverlay) {
    //         // Countdown is over, navigate to the quiz page
    //         router.push('/QuizPage');
    //     }

    //     return () => {
    //         clearInterval(countdownInterval);
    //     };
    // }, [countdown, showOverlay, router]);

    // const startQuiz = () => {
    //     // Show the overlay and start the countdown when the "Start Quiz" button is clicked
    //     setShowOverlay(true);
    //     setCountdown(3);
    // };

    return (
        <div className="w-full bg-cover border p-10 rounded-md bg-slate-100 mt-0 shadow-2xl">
            <div className="w-full text-center">
                <h1 className="text-3xl font-semibold mb-10">Welcome to ThinkTank</h1>
                <p className="font-medium">Quiz Rules:</p>
                <small className="text-amber-700">Please read all the rules and steps before start.</small>
            </div>
            <div className="mt-10">
                <p><span className="bg-amber-300 px-2 rounded-md mr-2">Step 1:</span> Click on the <span className="bg-amber-300 px-2 rounded-md">Start Quiz</span>  button below.</p>
                <p><span className="bg-amber-300 px-2 rounded-md mr-2">Step 2:</span>After clicking Start button, you will see a page with 3s count down, wait until the count is over!</p>
                <p><span className="bg-amber-300 px-2 rounded-md mr-2">Step 2:</span>You will see the questions with 4 options for each, and counter will start and which will count your exam time.</p>
                <p><span className="bg-amber-300 px-2 rounded-md mr-2">Step 2:</span>You have to select the correct answer, and you have 60 seconds to answer 6 questions.</p>
                <p><span className="bg-amber-300 px-2 rounded-md mr-2">Step 2:</span>Click on the submit quiz button, when you are done with all the answers.</p>
            </div>
            <div className="w-full flex mt-10">
                <Link href={`/categoryPage`}>
                <button
                    className="group bg-green-600 px-10 p-2 rounded-md mx-auto flex items-center gap-3 text-white"
                    // onClick={startQuiz}
                    // disabled={countdown > 0}
                >
                    Start Quiz
                    <FaArrowRight className="hidden group-hover:block" />
                </button>
                </Link>

                {/* {countdown > 0 && (
                    <div className="text-center mt-4">
                        <p>Quiz will start in {countdown} seconds...</p>
                    </div>
                )} */}
            </div>
            <img className="absolute top-0 left-12 -rotate-45 w-80" src="https://i.ibb.co/7gq8cmW/modern-question-mark-template-idea-message-vector-1017-47932-removebg-preview.png" alt="" />
            <img className="absolute top-0 right-12 rotate-45 w-80" src="https://i.ibb.co/7gq8cmW/modern-question-mark-template-idea-message-vector-1017-47932-removebg-preview.png" alt="" />
        </div>
    );
};

export default RulesAndSteps;