import React from "react";
import { Link } from "react-router-dom";

export const ImageCard = (props) => {
  const { item, imageSize = "w-full", isCast = false, isMovie, type } = props;
  const baseUrl = "http://image.tmdb.org/t/p/w500";
  const imageUrl = `${baseUrl}${item.poster_path || item.profile_path}`;
  let detailUrl;
  if (type === "movie") {
    detailUrl = `/movie-detail/${item.id}`;
  } else {
    detailUrl = `/show-detail/${item.id}`;
  }
  if (isCast) {
    return (
      <div
        className={`max-w-xs rounded overflow-hidden shadow-lg ${imageSize}`}
      >
        <div className="group relative overflow-hidden">
          <img
            className="w-full transition-transform duration-300 transform hover:scale-105"
            src={imageUrl}
            alt="Image description"
          />
        </div>
        <div className="px-4 py-2">
          <div className="font-bold text-lg text-gray-800 mb-2">
            {item.name}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-xs rounded overflow-hidden shadow-lg ${imageSize}`}>
      <Link to={detailUrl}>
        <div className="group relative overflow-hidden">
          <img
            className="w-full transition-transform duration-300 transform hover:scale-105"
            src={imageUrl}
            alt="Image description"
          />
        </div>
        <div className="px-4 py-2">
          <div className="font-bold text-lg text-gray-800 mb-2">
            {item.name || item.title || item.original_title}
          </div>
        </div>
      </Link>
    </div>
  );
};
