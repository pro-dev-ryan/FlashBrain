import React from "react";
import { Link } from "react-router-dom";

function Card({ card }) {
  const { id, name, logo, total } = card;
  return (
    <div className="cards mb-3">
      <div
        className="card-template glass bg-gradient-to-tl from-black to-transparent 
      hover:shadow lg:shadow-stone-600 transition-shadow duration-500 lg:bg-opacity-50 z-50"
      >
        <img src={logo} className="w-[90%] lg:w-full" alt="" />
        <div className="info">
          <h4 className="blogQue mt-2  text-lg">{name}</h4>
          <p className="lg:mb-4 mb-3  text-center text-orange-300 font-button">
            Total Quizes: {total}
          </p>
          <Link to={`${id}`} className="cardBtn">
            Take Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
