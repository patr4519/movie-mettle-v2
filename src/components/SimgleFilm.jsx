import React from "react";
import { Link } from "react-router-dom";
import { useGetFilmQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";

export const SingleFilm = () => {
  const { movieTitle } = useParams();

  const { data: film } = useGetFilmQuery(movieTitle);

  return (
    <div className="movie-item">
      {film.Title && (
        <div className="content">
          <img className="poster" src={film.Poster} alt="poster" width={100} />
          <div className="details">
            <div className="title">
              {film.Title}, {film.Year}
            </div>
            <div className="genre&runtime">
              {film.Genre}, {film.Runtime}
            </div>
            <div className="country">{film.Country}</div>
            <div className="director">{film.Director}</div>
          </div>
        </div>
      )}
    </div>
  );
};
