import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  // let activeClassName = "active";
  return (
    <nav className="h-18 backdrop-blur-md border-y border-white border-opacity-40 bg-slate-50 bg-opacity-25 px-10 flex items-center justify-between">
      <p className="flex items-center text-2xl font-semibold text-white">
        <img className="w-12" src="/public/favicon.png" alt="logo" />{" "}
        Skill-Tester
      </p>
      <ul className="navlinks lg:flex list-none gap-5 h-full text-lg items-center justify-end w-2/5">
        <li>
          <NavLink
            className={`text-slate-200 ${(isActive) =>
              isActive ? "active" : undefined}`}
            to={"home"}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`text-slate-200 ${(isActive) =>
              isActive ? "active" : undefined}`}
            to={"stats"}
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`text-slate-200 ${(isActive) =>
              isActive ? "active" : undefined}`}
            to={"blog"}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
