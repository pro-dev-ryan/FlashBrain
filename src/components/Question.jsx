import React, { useState } from "react";
import { toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";

function Question({ questions }) {
  const [quest, setQuest] = useState(0);
  const [correct, setCorrect] = useState(1);
  const [wrong, setWrong] = useState(1);
  const [show, setShow] = useState(false);
  console.log(show);

  const questText = questions[quest].question;
  const filteredQuest = (str) => {
    if ((str === "", str === null)) {
      return false;
    } else {
      return str.replace(/(<([^>]+)>)/gi, "");
    }
  };

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
      setWrong((current) => current + 1);
      console.log(wrong);
    }
  };

  return (
    <div className="h-[90vh] text-center overflow-y-hidden">
      <div className="quest bg-white bg-opacity-60 m-5 max-w-[40%] mx-auto p-5 block text-left rounded">
        <div className="flex justify-between">
          <h2 className="mb-2 font-heading text-lg font-semibold">
            Q{quest}: {filteredQuest(questText)}
          </h2>
          <button onClick={() => setShow(!show)}>
            <EyeIcon className="h-6 w-6 text-green-700" />{" "}
          </button>
        </div>
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
        {show && (
          <p className="bg-slate-200 p-2 bg-opacity-40 text-green-700 my-5 font-button rounded-md hidden">
            Correct Answer: {questions[quest].correctAnswer}
          </p>
        )}
      </div>
      <button className="cardBtn" onClick={handleNextQuest}>
        Next Question
      </button>
    </div>
  );
}

export default Question;
