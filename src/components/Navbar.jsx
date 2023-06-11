import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black font-sans text-lg">
      <ul className="nav-list flex flex-row gap-5 items-center mr-1">
        <li className="nav-item">
          <Link to={"/"}>
            <img src="favicon.png" alt="Logo" className="w-16 p-2" />
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/trending" className="text-white">
            Trending Shows
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-white">
            Popular Shows
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-white">
            Trending Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="text-white">
            Trending Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};
