import React from "react";
import { Link } from "react-router-dom";

function Card({ card }) {
  const { id, name, logo, total } = card;
  return (
    <div className="cards">
      <div className="card-template">
        <img src={logo} alt="" />
        <div className="info">
          <h4 className="font-semibold text-white">Name: {name}</h4>
          <p className="mb-2">
            <small>Total Quizes: {total}</small>
          </p>
          <Link to={`${id}`} className="cardBtn ">
            Take Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
