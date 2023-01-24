import React from "react";

const Footer = () => {
  return (
    <div className="text-center flex justify-center items-center text-slate-100 font-semibold h-10 border-y border-white border-opacity-40 bg-black bg-opacity-40">
      <p className="text-sm md:text-base">
        Designed By{" "}
        <a href="/">
          {" "}
          <span className="text-orange-400">Azizul Islam</span>{" "}
        </a>{" "}
        <>&copy;</> 2022
      </p>
    </div>
  );
};

export default Footer;
