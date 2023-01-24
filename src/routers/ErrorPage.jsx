import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center space-y-3  justify-center h-[100vh] py-10">
      <div className="text-center flex flex-col items-center space-y-3">
        <h1 className="text-2xl text-rose-300  glass px-4 font-semibold ">
          Oh No!
        </h1>
        <p className="text-3xl text-rose-400 font-bold font-heading">
          {error.status}
        </p>
        <p className="text-white text-xl">
          {error.statusText || error.message}
        </p>
        <img
          className="h-96"
          src="./src/error.png"
          alt={error.statusText || error.message}
        />
        <h3 className="glassComponent blogQue">Route Not Found</h3>
      </div>
      <Link className="cardBtn mt-10" to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
