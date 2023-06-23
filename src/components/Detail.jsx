import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageCard } from "./ImageCard";
import { fetch } from "../api/api";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`movie/${id}`).then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, overview, poster_path, videos } = movie;
  const trailer = videos.results.find((video) => video.type === "Trailer");
  const trailerKey = trailer ? trailer.key : null;
  const trailerUrl = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}`
    : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <div className="w-full md:w-1/3">
          <ImageCard key={movie.id} item={movie} />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">{overview}</p>
        </div>
      </div>
      {trailerUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={trailerUrl}
            title={`${title} Trailer`}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetailPage;
