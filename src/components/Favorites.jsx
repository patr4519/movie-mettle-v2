import React from "react";
import { useSelector } from "react-redux";
import EmptyFavorites from "./EmptyFavorites";
import { selectUser } from "../features/api/userSlice";
import { FavFilm } from "./FavFilm";
import { SortSelect } from "./SortSelect";
import Pagination from "@mui/material/Pagination";
import { AuthorizationForm } from "./AuthorizationBlock";

export const Favorites = () => {
  const [page, setPage] = React.useState(1);

  const favorites = useSelector(selectUser)?.favorites;
  const user = useSelector(selectUser);

  const changePag = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * 5;
  const displayedFavorites = favorites?.slice(startIndex, startIndex + 5);

  if (!user) return <AuthorizationForm />;
  if (!favorites.length) return <EmptyFavorites />;

  return (
    <>
      <div className="movie-list">
        <h2>Favorites</h2>
        <SortSelect />
        {displayedFavorites.map((movie) => {
          return <FavFilm key={movie.Title} title={movie.Title} />;
        })}
      </div>
      {favorites.length > 5 && (
        <Pagination
          className="fav-pagination"
          count={Math.ceil(favorites.length / 5)}
          page={page}
          onChange={changePag}
        />
      )}
    </>
  );
};
