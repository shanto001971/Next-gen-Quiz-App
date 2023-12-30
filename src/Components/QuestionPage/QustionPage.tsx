import React from 'react';

const questionPage = ({ question }) => {

    const { text, options, correctAnswer, category } = question;

    console.log(question)

    return (

        <div className="p-10 border rounded-md mt-5">
            <h1 className='text-xl font-medium'>{text}</h1>
            <div className="grid grid-cols-2 gap-5 mt-5">
                {
                    options.map(singleOption => <div className="border shadow-md p-3 text-center rounded-xl">
                        <h1>{singleOption}</h1>
                    </div>)
                }

                <div className="">
                    <h1></h1>
                </div>
            </div>
        </div>

    );
};

export default questionPage;