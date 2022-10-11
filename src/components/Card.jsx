import React from "react";

function Card({ card }) {
  const { id, name, logo, total } = card;
  return (
    <div className="cards">
      <div className="card-template">
        <img src={logo} alt="" />
        <div className="info">
          <h4 className="font-semibold text-white">Name: {name}</h4>
          <p>
            <small>Total Quizes: {total}</small>
          </p>
          <button className="cardBtn" onClick={() => id}>
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
