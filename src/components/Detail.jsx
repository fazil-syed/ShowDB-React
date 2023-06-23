import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch } from "../api/api";
import { ImageCard } from "./ImageCard";

const MovieDetailPage = (props) => {
  const { type } = props;
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`${type}/${id}`).then((data) => setMovie(data));
    fetch(`${type}/${id}/credits`).then((data) => setCast(data.cast));
  }, [id]);

  if (!movie || cast.length === 0) {
    return <div>Loading...</div>;
  }

  const { title, name, overview, videos, poster_path } = movie;

  // Get the trailer key from the videos object
  const trailer = videos.results.find((video) => video.type === "Trailer");
  const trailerKey = trailer ? trailer.key : null;
  const trailerUrl = trailerKey
    ? `https://www.youtube.com/embed/${trailerKey}`
    : null;

  // Filter out cast members without images
  const castWithImages = cast.filter((cast) => cast.profile_path);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-start md:mb-8">
        <div className="md:w-1/2 pr-4">
          {poster_path && (
            <img
              className="w-full rounded-md shadow-md mb-4"
              src={`http://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          )}
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-0">
            {title || name}
          </h2>
          <p className="mb-4 mt-0">{overview}</p>
          {trailerUrl && (
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Trailer</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={trailerUrl}
                  title={`${title} Trailer`}
                  className="w-full"
                  style={{ height: 450 }}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-2xl font-bold mb-4">Cast</h3>
        <div className="flex flex-wrap gap-6">
          {castWithImages.map((cast) => (
            <ImageCard
              key={cast.id}
              item={cast}
              isCast={true}
              imageSize="w-40"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
