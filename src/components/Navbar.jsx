import React from "react";
import { Link } from "react-router-dom";
export const Navbar = (props) => {
  const { currentPage, setCurrentPage } = props;
  return (
    <nav className="sticky top-0 z-50 bg-black font-sans text-lg">
      <ul className="nav-list flex flex-row gap-5 items-center mr-1">
        <li className="nav-item">
          <Link to={"/"} onClick={() => setCurrentPage("Home")}>
            <img src="favicon.png" alt="Logo" className="w-16 p-2" />
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/trending-tv"
            className="text-white"
            onClick={() => setCurrentPage("Trending Shows")}
          >
            Trending Shows
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/popular-tv"
            className="text-white"
            onClick={() => setCurrentPage("Popular Shows")}
          >
            Popular Shows
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/trending-movie"
            className="text-white"
            onClick={() => setCurrentPage("Trending Movies")}
          >
            Trending Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/trending-movie"
            className="text-white"
            onClick={() => setCurrentPage("Trending Movies")}
          >
            Popular Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};
