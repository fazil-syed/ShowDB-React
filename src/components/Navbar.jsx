import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = (props) => {
  const { currentPage, setCurrentPage, searchTerm, setSearchTerm } = props;
  const [searchTermBuffer, setSearchTermBuffer] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = () => {
    setSearchTerm(searchTermBuffer);
    setSearchTermBuffer("");
    setCurrentPage("Search");
  };

  const handleChange = (event) => {
    setSearchTermBuffer(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black font-sans text-lg">
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        <div className="flex items-center">
          <Link to={"/"} onClick={() => setCurrentPage("Home")}>
            <img src="favicon.png" alt="Logo" className="w-16 p-2" />
          </Link>
          <div className="hidden md:flex ml-8">
            <ul className="flex flex-row gap-5">
              <li>
                <Link
                  to="/trending-tv"
                  className="text-white"
                  onClick={() => setCurrentPage("Trending Shows")}
                >
                  Trending Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/popular-tv"
                  className="text-white"
                  onClick={() => setCurrentPage("Popular Shows")}
                >
                  Popular Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/trending-movie"
                  className="text-white"
                  onClick={() => setCurrentPage("Trending Movies")}
                >
                  Trending Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/popular-movie"
                  className="text-white"
                  onClick={() => setCurrentPage("Popular Movies")}
                >
                  Popular Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex items-center mr-5">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTermBuffer}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={handleSearch}
          >
            <div className="text-gray-500">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col items-center mt-2 mb-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                to="/trending-tv"
                className="text-white"
                onClick={handleMenuClick}
              >
                Trending Shows
              </Link>
            </li>
            <li>
              <Link
                to="/popular-tv"
                className="text-white"
                onClick={handleMenuClick}
              >
                Popular Shows
              </Link>
            </li>
            <li>
              <Link
                to="/trending-movie"
                className="text-white"
                onClick={handleMenuClick}
              >
                Trending Movies
              </Link>
            </li>
            <li>
              <Link
                to="/popular-movie"
                className="text-white"
                onClick={handleMenuClick}
              >
                Popular Movies
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
