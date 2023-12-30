"use client"
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QuestionPage from '../../../Components/QuestionPage/QustionPage'

const answerQuiz = () => {
    // const router = useRouter();
    const [quizData, setQuizData] = useState([])

    // const { category } = router.query;
    const { category } = useParams()
    // console.log(category)

    useEffect(() => {
        fetch('/quiz.json')
            .then((res) => res.json())
            .then((data) => {
                const filterData = data.filter(singleData => singleData.category == category)
                // console.log(filterData)
                setQuizData(filterData)
            })
            .catch((error) => console.error('Error fetching quiz.json:', error));
    }, []);


    return (
        <div className="flex">
            <div className="w-[60%]">
            {
                quizData.map((singleData,index)=><QuestionPage question={singleData}/>)
            }
            </div>
            <div className="w-[40%]">

            </div>
        </div>
    );
};

export default answerQuiz;