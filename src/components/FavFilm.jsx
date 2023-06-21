import React from "react";
import { Link } from "react-router-dom";
import { useGetFilmQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { useEditUserFavMutation } from "../features/api/apiUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, selectUser } from "../features/api/userSlice";

export const FavFilm = ({ title }) => {
  let user = useSelector(selectUser);
  const { movieTitle } = useParams();
  const [updateFav] = useEditUserFavMutation();
  const dispath = useDispatch();

  const film = movieTitle ? movieTitle : title;

  const { data, error, isLoading } = useGetFilmQuery(film);

  const handleRemove = async () => {
    let newArr = user.favorites.filter((movie) => movie !== film);

    try {
      await updateFav({
        ...user,
        favorites: [...newArr],
      });
      dispath(removeFavorite(newArr));
    } catch (error) {
      alert("Error on delete movie");
    }
  };

  if (error) return <div>Error while fetch film</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data.Title) return <div>{`${title}: not found `}</div>;

  return (
    <div className="fav-item">
      <div className="content">
        <Link to={`/movie/${data.Title}`} className="poster-link">
          <img className="poster" src={data.Poster} alt="poster" width={100} />
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
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};
