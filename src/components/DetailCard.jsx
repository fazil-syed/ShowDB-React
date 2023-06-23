import React from "react";
import { Link } from "react-router-dom";

export const DetailCard = (props) => {
  const { item } = props;
  const baseUrl = "http://image.tmdb.org/t/p/w500";
  const imageUrl = `${baseUrl}${item.poster_path}`;
  const detailUrl = `/detail/${item.id}`;
  return (
    <>
      <Link to={detailUrl}>
        {item.poster_path !== null && (
          <div className="max-w-lg rounded overflow-hidden shadow-lg ">
            <div className="group relative overflow-hidden">
              <img
                className="w-full transition-transform duration-300 transform hover:scale-105"
                src={imageUrl}
                alt="Image description"
              />
            </div>
            <div className="px-8 py-4">
              <div className="font-bold text-xl text-gray-800 mb-2">
                {item.name || item.original_title}
              </div>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};
