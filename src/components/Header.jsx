import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative z-50">
      <nav className="lg:h-16 h-10 px-10 glass bg-black bg-opacity-50 items-center justify-between flex">
        <p className="flex items-center text-lg lg:text-2xl font-semibold text-white">
          <img className="w-6 lg:w-12" src="/favicon.png" alt="logo" />{" "}
          Skill-Tester
        </p>
        <ul className="navlinks hidden lg:flex list-none gap-5 h-full text-lg items-center justify-end w-2/5">
          <li>
            <NavLink
              className={`text-slate-200 ${(isActive) =>
                isActive ? "active" : undefined}`}
              to={"/"}
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
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition-all duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 glass bg-stone-900 bg-opacity-95">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="home"
                      aria-label="Skill-Test"
                      title="Skill-Test"
                      className="inline-flex items-center"
                    >
                      <img src="/favicon.png" alt="" className="w-6" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
                        Skill-Test
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="flex flex-col space-y-8">
                    <li>
                      <Link
                        to="/"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="stats"
                        aria-label="Statistics"
                        title="Statistics"
                        className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="blog"
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
