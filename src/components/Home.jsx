import React from "react";
import { Link } from "react-router-dom";
import { ImageCard } from "./ImageCard";

export const Home = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-wrap gap-20 m-2">
      {data.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
      {console.log(data)}
    </div>
  );
};
