import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { fetch } from "./api/api";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import DetailPage from "./components/Detail";

function App() {
  const [data, setData] = useState(null);
  const [movieData, setMovieData] = useState(null);
  const [currentPage, setCurrentPage] = useState("Home");
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  useEffect(() => {
    switch (currentPage) {
      case "Home":
        fetch("discover/movie").then((data) => {
          setData(data);
          setMovieData(null);
        });

        break;
      case "Trending Shows":
        fetch("trending/tv/day").then((data) => {
          setData(data);
          setMovieData(null);
        });
        break;
      case "Trending Movies":
        fetch("trending/movie/day").then((data) => {
          setData(data);
          setMovieData(null);
        });
        break;
      case "Popular Shows":
        fetch("tv/popular").then((data) => {
          setData(data);
          setMovieData(null);
        });
        break;
      case "Popular Movies":
        fetch("movie/popular").then((data) => {
          setData(data);
          setMovieData(null);
        });
        break;
      case "Search":
        fetch(`search/tv?query=${searchTerm}`).then((data) => {
          setData(data);
        });
        fetch(`search/movie?query=${searchTerm}`).then((data) => {
          setMovieData(data);
        });
        break;
    }
  }, [currentPage, searchTerm]);
  return (
    <div className="App">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Feed currentPage={currentPage} data={data} movieData={movieData} />
          }
        />
        <Route
          path="/trending-tv"
          currentPage={currentPage}
          element={<Feed data={data} />}
        />
        <Route
          path="/trending-movie"
          currentPage={currentPage}
          element={<Feed data={data} />}
        />
        <Route
          path="/popular-tv"
          currentPage={currentPage}
          element={<Feed data={data} />}
        />
        <Route
          path="/popular-movie"
          currentPage={currentPage}
          element={<Feed data={data} />}
        />
        <Route
          path="/detail/:id"
          currentPage={currentPage}
          element={<DetailPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
