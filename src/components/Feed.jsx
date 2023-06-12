import React from "react";
import { ImageCard } from "./ImageCard";

export const Feed = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-wrap gap-20 mt-5 ml-14">
      {data !== null &&
        data.map((item) => <ImageCard key={item.id} item={item} />)}
    </div>
  );
};
