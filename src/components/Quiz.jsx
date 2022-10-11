import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const Quiz = () => {
  const quiz = useLoaderData();
  const questions = quiz.data.questions;
  return (
    <div>
      {questions.map((quest) => (
        <Question key={quest.id} quest={quest} />
      ))}
    </div>
  );
};

export default Quiz;
