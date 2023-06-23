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
        <ul className="flex flex-row gap-5 items-center">
          <li>
            <Link to={"/"} onClick={() => setCurrentPage("Home")}>
              <img src="favicon.png" alt="Logo" className="w-16 p-2" />
            </Link>
          </li>
          <li>
            <Link
              to="/trending-tv"
              className="text-white"
              onClick={() => {
                setCurrentPage("Trending Shows");
                handleMenuClick();
              }}
            >
              Trending Shows
            </Link>
          </li>
          <li>
            <Link
              to="/popular-tv"
              className="text-white"
              onClick={() => {
                setCurrentPage("Popular Shows");
                handleMenuClick();
              }}
            >
              Popular Shows
            </Link>
          </li>
          <li>
            <Link
              to="/trending-movie"
              className="text-white"
              onClick={() => {
                setCurrentPage("Trending Movies");
                handleMenuClick();
              }}
            >
              Trending Movies
            </Link>
          </li>
          <li>
            <Link
              to="/popular-movie"
              className="text-white"
              onClick={() => {
                setCurrentPage("Popular Movies");
                handleMenuClick();
              }}
            >
              Popular Movies
            </Link>
          </li>
        </ul>
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

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-4 pt-16 pb-6">
          <button
            className="text-white"
            onClick={handleMenuClick}
            aria-label="Close Mobile Menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="flex flex-col items-center justify-center gap-4">
            <li>
              <Link
                to="/trending-tv"
                className="text-white"
                onClick={() => {
                  setCurrentPage("Trending Shows");
                  handleMenuClick();
                }}
              >
                Trending Shows
              </Link>
            </li>
            <li>
              <Link
                to="/popular-tv"
                className="text-white"
                onClick={() => {
                  setCurrentPage("Popular Shows");
                  handleMenuClick();
                }}
              >
                Popular Shows
              </Link>
            </li>
            <li>
              <Link
                to="/trending-movie"
                className="text-white"
                onClick={() => {
                  setCurrentPage("Trending Movies");
                  handleMenuClick();
                }}
              >
                Trending Movies
              </Link>
            </li>
            <li>
              <Link
                to="/popular-movie"
                className="text-white"
                onClick={() => {
                  setCurrentPage("Popular Movies");
                  handleMenuClick();
                }}
              >
                Popular Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
