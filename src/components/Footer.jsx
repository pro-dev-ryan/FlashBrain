import React from "react";

const Footer = () => {
  return (
    <div className="text-center text-slate-100 font-semibold h-18 backdrop-blur-md border-y border-white border-opacity-40 bg-slate-50 bg-opacity-25">
      <p className="text-sm">
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
