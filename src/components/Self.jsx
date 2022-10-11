import React from "react";

const Self = () => {
  return (
    <div className="selfDiv bg-white bg-opacity-40 flex flex-col items-center space-y-1 mt-5 rounded-r-2xl">
      <img
        src="https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="user"
        className="h-[300px] my-6 rounded-lg border"
      />
      <h3 className="text-sky-800 text-lg font-semibold px-5 font-heading">
        I'm AZ. A Web enthusiast. Wanna be a great designer in the future.
      </h3>
      <p className="px-5 text-black">
        This is just a try to make this project a bit unique. Though it is a
        quiz app made with react and react-router.
      </p>
    </div>
  );
};

export default Self;
