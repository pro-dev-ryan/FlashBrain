import React, { useState } from "react";

function Question({ questions }) {
  const [quest, setQuest] = useState(0);

  const handleNextQuest = () => {
    setQuest((current) => current + 1);
  };
  const handleAns = (val) => {
    const cor = val === questions[quest].correctAnswer ? "Right" : "wrong";
    console.log(cor);
  };
  console.log(questions[quest].correctAnswer);

  //   console.log(questions[quest].question);
  return (
    <div className="h-[90vh] text-center overflow-y-hidden">
      <div className="quest bg-white bg-opacity-60 m-5 max-w-[40%] mx-auto p-5 block text-left rounded">
        <h2 className="mb-2 font-heading text-lg font-semibold">
          Q: {questions[quest].question}
        </h2>
        <ol type="1" className="">
          {questions[quest].options.map((ans, index) => (
            <li
              key={index}
              className="bg-slate-600 p-2 bg-opacity-50 text-white my-5 font-button rounded-md"
            >
              <span>
                <input
                  onClick={() => handleAns(ans)}
                  type="radio"
                  name="answere"
                  value={ans}
                />{" "}
              </span>
              {ans}
            </li>
          ))}
        </ol>
      </div>
      <button className="cardBtn" onClick={handleNextQuest}>
        Next Question
      </button>
    </div>
  );
}

export default Question;
