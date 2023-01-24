import React from "react";
import Slider from "./Slider";

const Self = () => {
  return (
    <div className="glass lg:flex bg-black bg-opacity-60 items-center my-5 justify-between py-3 space-x-5 mt-5 rounded-r-2xl px-4">
      <div className="sidebar lg:mx-auto z-10 lg:w-[30%] pb-2">
        <div className=" flex flex-col rounded-md items-center">
          <img
            src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="user"
            className="h-[250px] lg:w-[60%] my-6 rounded-lg"
          />
          <h3 className="blogQue text-md lg:text-lg font-semibold px-5 font-heading">
            I'm AZ. A Web enthusiast. Wanna be a great designer in the future.
          </h3>
          <p className="blogAns text-center">
            This is just a try to make this project a bit unique. Though it is a
            quiz app made with react and react-router.
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[60%]">
        <Slider />
      </div>
    </div>
  );
};

export default Self;
