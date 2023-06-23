import React from "react";
import { useSelector } from "react-redux";
import EmptyFavorites from "./EmptyFavorites";
import { selectUser } from "../features/api/userSlice";
import { LogIn } from "../components/LogIn";
import { FavFilm } from "./FavFilm";
import { SortSelect } from "./SortSelect";

export const Favorites = () => {
  const favorites = useSelector(selectUser)?.favorites;
  const user = useSelector(selectUser);

  if (!user)
    return (
      <>
        <p>LogIn or SignUp to save your favorites movies</p>
        <LogIn />
      </>
    );
  if (!favorites.length) return <EmptyFavorites />;

  return (
    <div className="movie-list">
      <h2>Favorites</h2>
      <SortSelect />
      {favorites.map((movie) => {
        return <FavFilm key={movie.Title} title={movie.Title} />;
      })}
    </div>
  );
};
