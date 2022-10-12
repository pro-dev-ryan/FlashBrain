import React from "react";
import Slider from "./Slider";

const Self = () => {
  return (
    <div className="bg-white bg-opacity-40 lg:flex items-center justify-between space-x-5  mt-5 rounded-r-2xl px-4">
      <div className="sidebar lg:w-[30%] pb-4">
        <div className="selfDiv flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="user"
            className="h-[250px] my-6 rounded-lg border"
          />
          <h3 className="text-sky-800 text-md lg:text-lg font-semibold px-5 font-heading">
            I'm AZ. A Web enthusiast. Wanna be a great designer in the future.
          </h3>
          <p className="px-5 text-black text-sm lg:text-md">
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
