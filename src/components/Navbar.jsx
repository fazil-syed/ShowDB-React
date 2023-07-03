import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = (props) => {
  const { currentPage, setCurrentPage, searchTerm, setSearchTerm } = props;
  const [searchTermBuffer, setSearchTermBuffer] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchTerm(searchTermBuffer);
    setSearchTermBuffer("");
    setCurrentPage("Search");
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleChange = (event) => {
    setSearchTermBuffer(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const currentPageChange = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchVisible(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black font-sans text-lg">
      <div className="flex items-center justify-between px-4 md:py-1 md:px-10">
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
                  onClick={() => currentPageChange("Trending Shows")}
                >
                  Trending Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/popular-tv"
                  className="text-white"
                  onClick={() => currentPageChange("Popular Shows")}
                >
                  Popular Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/trending-movie"
                  className="text-white"
                  onClick={() => currentPageChange("Trending Movies")}
                >
                  Trending Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/popular-movie"
                  className="text-white"
                  onClick={() => currentPageChange("Popular Movies")}
                >
                  Popular Movies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative flex items-center mr-5">
          <div className="md:hidden flex flex-row justify-between ">
            <div className="mr-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className={`px-3 py-1 w-56 mr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 block
                  }`}
                  value={searchTermBuffer}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                <div
                  className="absolute inset-y-0 right-3  flex items-center pr-3 cursor-pointer"
                  onClick={handleSearch}
                >
                  <div className="text-gray-500">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle Mobile Menu"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <div
            className={`hidden md:block ${
              isMobileMenuOpen ? "hidden" : "block"
            }`}
          >
            <div className="relative">
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
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4 content-center text-center">
            <li>
              <Link
                to="/trending-tv"
                className="text-white"
                onClick={() => currentPageChange("Trending Shows")}
              >
                Trending Shows
              </Link>
            </li>
            <li>
              <Link
                to="/popular-tv"
                className="text-white"
                onClick={() => currentPageChange("Popular Shows")}
              >
                Popular Shows
              </Link>
            </li>
            <li>
              <Link
                to="/trending-movie"
                className="text-white"
                onClick={() => currentPageChange("Trending Movies")}
              >
                Trending Movies
              </Link>
            </li>
            <li>
              <Link
                to="/popular-movie"
                className="text-white"
                onClick={() => currentPageChange("Popular Movies")}
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
