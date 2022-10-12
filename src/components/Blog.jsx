import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <h1 className="text-center text-xl lg:text-2xl lg:my-5 text-white font-heading font-bold glass w-fit bg-zinc-700 bg-opacity-30 p-2">
        This is Blog
      </h1>
      <div className="glass bg-white bg-opacity-60 lg:max-w-[40%] lg:m-auto lg:p-5 p-2 block text-left rounded ">
        <h3 className="font-heading text-base lg:text-lg lg:font-semibold">
          <span className="text-rose-400"> Que: </span>
          what is the purpose of react router ?
        </h3>
        <p className="bg-zinc-700 bg-opacity-40 p-2 rounded-md">
          <span className="text-stone-100">Ans:</span> React Router helps the
          developer to set multiple route of a webpage. Specially This
          functionality gave advantage in single page react Application.{" "}
        </p>
      </div>
      <div className="glass bg-white bg-opacity-60 lg:max-w-[40%] lg:m-auto lg:p-5 p-2 block text-left rounded">
        <h3 className="font-heading text-base lg:text-lg lg:font-semibold">
          <span className="text-rose-400"> Que: </span>
          how does context api work ?
        </h3>
        <p className="bg-zinc-700 bg-opacity-40 p-2 rounded-md">
          <span className="text-stone-100">Ans:</span>
          Context Api is another hook which gave a power to developers that they
          can transmit data nearly anywhere in the application, with props
          drilling. generally it should be create in the root of the
          application. It has a provider wrapper. Data will be available to the
          routes of those are contained by the provider wrapper. after that we
          have to call the context by use context hook. and the data transmitted
          through the apis are will be ready to use.{" "}
        </p>
      </div>
      <div className="glass bg-white bg-opacity-60 lg:max-w-[40%] lg:m-auto lg:p-5 p-2 block text-left rounded mb-5">
        <h3 className="font-heading text-base lg:text-lg lg:font-semibold">
          <span className="text-rose-400"> Que: </span>
          what is use href hook in react router ?
        </h3>
        <p className="bg-zinc-700 bg-opacity-40 p-2 rounded-md">
          <span className="text-stone-100">Ans:</span>
          The useRef is a hook that allows us directly create a reference to the
          DOM element in the functional component. This hook will work with this
          Syntax: const refContainer = useRef(initialValue) .The useRef returns
          a mutable reffered object.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
