import Link from "next/link";


const RulesAndSteps = () => {
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
            <div className="w-full flex  mt-10">
                <Link href="/Quiz"><button className="bg-green-600 px-10 p-2 rounded-md mx-auto ">Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default RulesAndSteps;