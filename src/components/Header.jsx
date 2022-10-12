import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="lg:h-18 h-10 glass bg-slate-50 bg-opacity-25 px-10 items-center justify-between flex">
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
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
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
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 glass bg-stone-900 bg-opacity-95">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="home"
                      aria-label="Skill-Test"
                      title="Skill-Test"
                      className="inline-flex items-center"
                    >
                      <img src="/favicon.png" alt="" className="w-6" />
                      <span class="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">
                        Skill-Test
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-100" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        aria-label="Home"
                        title="Home"
                        class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="stats"
                        aria-label="Statistics"
                        title="Statistics"
                        class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Statistics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="blog"
                        aria-label="Blog"
                        title="Blog"
                        class="font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
