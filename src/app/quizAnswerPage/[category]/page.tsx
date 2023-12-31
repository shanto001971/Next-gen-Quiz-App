"use client"
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QuestionPage from '../../../Components/QuestionPage/QustionPage'

const answerQuiz = () => {
    const { category } = useParams()
    const [quizData, setQuizData] = useState([])

    useEffect(() => {
        fetch("quiz.json")
            .then((res) => res.json())
            .then((data) => {
                const filterData = data.filter(singleData => singleData.category == category)
                setQuizData(filterData)
            })
            .catch((error) => console.error('Error fetching quiz.json:', error));
    }, []);

    console.log(quizData)


    return (
        <div className="flex">
            <div className="w-[60%]">
            {
                quizData.map((singleData,index)=><QuestionPage key={index} question={singleData} index={index}/>)
            }
            </div>
            <div className="w-[40%]">

            </div>
        </div>
    );
};