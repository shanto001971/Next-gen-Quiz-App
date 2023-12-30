"use client"
import Link from "next/link";
import { useEffect, useState } from "react";


const quizCategory = () => {

    const [quizData, setQuizData] = useState([])

    useEffect(() => {
        fetch("quizCategory.json")
            .then(res => res.json())
            .then(data => setQuizData(data))
    }, [])

    // console.log(quizData)


    return (
        <div className="w-full">
            <h1 className="text-center text-5xl font-semibold">Select Quiz Category</h1>
            <div className="w-[80%]  mx-auto grid grid-cols-2 gap-5 mt-10 p-20 py-32 border rounded-md bg-slate-200 shadow-2xl">
                {
                    quizData?.map(singleData => <Link href={`/quizAnswerPage/${singleData}`}>
                        <div className="bg-green-300 text-3xl font-bold p-5 text-center rounded-xl shadow-2xl">
                            <h1>{singleData}</h1>
                        </div>
                    </Link>)
                }

            </div>
        </div>
    );
};

export default quizCategory;