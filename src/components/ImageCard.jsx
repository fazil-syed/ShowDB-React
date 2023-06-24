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
      <div className={`max-w-md rounded-lg overflow-hidden ${imageSize}`}>
        <div className="group relative overflow-hidden">
          <img
            className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
            src={imageUrl}
            alt="Image description"
          />
        </div>
        <div className="px-4 py-2">
          <div className="font-bold text-xl leading-none	 text-gray-800 ">
            {item.name}
          </div>
        </div>
      </div>
    );
  }

  if (item.poster_path || item.profile_path) {
    return (
      <div className={`max-w-xs rounded overflow-hidden ${imageSize}`}>
        <Link to={detailUrl}>
          <div className="group relative overflow-hidden">
            <img
              className="w-full object-cover transition-transform duration-300 transform hover:scale-105"
              src={imageUrl}
              alt="Image description"
            />
          </div>
          <div className="px-4 py-2">
            <div className="font-bold text-lg md:text-2xl text-gray-800 mb-2 text-center">
              {item.name || item.title || item.original_title}
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return null;
};
