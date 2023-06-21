import React from "react";
import { useGetFilmQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, selectUser } from "../features/api/userSlice";
import { useEditUserFavMutation, useGetUsersQuery } from "../features/api/apiUserSlice";

export const SingleFilm = () => {
  const dispatch = useDispatch();
  const { movieTitle } = useParams();
  const { data: film, isLoading } = useGetFilmQuery(movieTitle);
  let user = useSelector(selectUser);
  const [updateFav] = useEditUserFavMutation();

  const handleAddBtn = async () => {
    if (!user) {
      alert("Sign in first");
      return;
    }

    try {
      const done = await updateFav({
        ...user,
        favorites: [...user.favorites, movieTitle],
      });
      if (done) {
        dispatch(addFavorite(movieTitle));
      }
    } catch (error) {
      alert(error);
    }
  };

  let isFavorite;
  if (user && user.favorites.includes(movieTitle)) {
    isFavorite = true;
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="single-movie-wrapper">
      <div className="single-movie">
        <div className="left-block">
          <img src={film.Poster} alt="poster" width={"100%"} />
          {isFavorite ? <div className="favorite-container">In your favorites</div> : <Button onClick={handleAddBtn}>Add to favorite</Button>}
        </div>
        <div className="right-block">
          <div className="movie-title">
            {film.Title} ({film.Year})
          </div>
          <div className="movie-info">
            <div className="movie-about">About film</div>
            <div className="movie-row">
              <div>Released</div>
              <div>{film.Released}</div>
            </div>
            <div className="movie-row">
              <div>Country</div>
              <div>{film.Country}</div>
            </div>
            <div className="movie-row">
              <div>Genre</div>
              <div>{film.Genre}</div>
            </div>
            <div className="movie-row">
              <div>Writer</div>
              <div>{film.Writer}</div>
            </div>
            <div className="movie-row">
              <div>Director</div>
              <div>{film.Director}</div>
            </div>
            <div className="movie-row">
              <div>Actors</div>
              <div>{film.Actors}</div>
            </div>
            <div className="movie-row">
              <div>Box Office</div>
              <div>{film.BoxOffice}</div>
            </div>
            <div className="movie-row">
              <div>Rated</div>
              <div>{film.Rated}</div>
            </div>
            <div className="movie-plot">
              <p>Plot:</p>
              {film.Plot}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
