import React from "react";

function Question({ quest }) {
  const { id, question, correctAnswere, options } = quest;
  console.log(quest);
  return (
    <div>
      <h2>Q: {question}</h2>
      <ul>
        {options.map((ans) => (
          <li>{ans}</li>
        ))}
        <li>answere</li>
      </ul>
    </div>
  );
}

export default Question;
