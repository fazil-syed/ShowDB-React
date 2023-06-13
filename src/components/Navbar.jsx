import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Navbar = (props) => {
  const { currentPage, setCurrentPage, searchTerm, setSearchTerm } = props;
  const [searchTermBuffer, setSearchTermBuffer] = useState("");

  const handleSearch = () => {
    // Perform the search action using the searchTerm
    setSearchTerm(searchTermBuffer);
    setSearchTermBuffer("");
    setCurrentPage("Search");
    console.log(currentPage, searchTerm, searchTermBuffer);
  };

  const handleChange = (event) => {
    setSearchTermBuffer(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <nav className="sticky top-0 z-50 flex bg-black font-sans text-lg justify-between">
      <ul className="nav-list flex flex-row gap-5 items-center  mr-1">
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
            to="/popular-movie"
            className="text-white"
            onClick={() => setCurrentPage("Popular Movies")}
          >
            Popular Movies
          </Link>
        </li>
      </ul>
      <div className="relative flex items-center mr-5">
        <Link to="/search">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTermBuffer}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <button type="submit">
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => {
                  setSearchTerm(searchTermBuffer);
                  setCurrentPage("Search");
                  setSearchTermBuffer("");
                }}
              >
                <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
              </div>
            </button>
          </div>
        </Link>
      </div>
    </nav>
  );
};
