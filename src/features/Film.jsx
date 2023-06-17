import React from "react";
import { Link } from "react-router-dom";
import { useGetFilmQuery } from "./api/apiSlice";
import { useParams } from "react-router-dom";

export const Film = ({ title }) => {
  const { movieTitle } = useParams();

  const film = movieTitle ? movieTitle : title;

  const { data, error, isLoading } = useGetFilmQuery(film);

  if (error) return <div>Error while fetch film</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data.Title) return <div>{`${title}: not found `}</div>;

  return (
    <div className="movie-item">
      {data.Title && (
        <div className="content">
          <Link to={`/movie/${data.Title}`} className="poster-link">
            <img
              className="poster"
              src={data.Poster}
              alt="poster"
              width={100}
            />
          </Link>
          <div className="details">
            <div className="title">
              {data.Title}, {data.Year}
            </div>
            <div className="genre&runtime">
              {data.Genre}, {data.Runtime}
            </div>
            <div className="country">{data.Country}</div>
            <div className="director">{data.Director}</div>
          </div>
        </div>
      )}
    </div>
  );
};
