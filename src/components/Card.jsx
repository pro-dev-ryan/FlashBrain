import React from "react";

function Card({ card }) {
  const { id, name, logo, total } = card;
  return (
    <div className="cards">
      <div className="card-template">
        <img src={logo} alt="" />
        <div className="info">
          <h4>Name:{name}</h4>
          <p>Total Quizes: {total}</p>
          <button onclick={() => id}>Take Test</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
