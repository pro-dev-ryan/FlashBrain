import React, { useState } from "react";
import { toast } from "react-toastify";

function Question({ questions }) {
  const [quest, setQuest] = useState(0);
  const [correct, setCorrect] = useState(1);
  // console.log(questions);

  const handleNextQuest = () => {
    if (quest < questions.length - 1) {
      setQuest((current) => current + 1);
    } else {
      toast("This is the last quiz", { autoClose: 1000 });
      console.log(correct);
    }
  };

  const handleAns = (val) => {
    if (val === questions[quest].correctAnswer) {
      toast.success("wow! You're Right", {
        postition: "top right",
        autoClose: 1000,
      });
      setCorrect((current) => current + 1);
      console.log(correct);
    } else {
      toast.error("Sorry! You're Wrong", {
        postition: "top left",
        autoClose: 1500,
      });
      wrong = wrong + 1;
      console.log(wrong);
    }
  };

  return (
    <div className="h-[90vh] text-center overflow-y-hidden">
      <div className="quest bg-white bg-opacity-60 m-5 max-w-[40%] mx-auto p-5 block text-left rounded">
        <h2 className="mb-2 font-heading text-lg font-semibold">
          Q: {quest} {questions[quest].question}
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
