import React from "react";
import { Link } from "react-router-dom";
import { useGetFilmQuery } from "../features/api/apiSlice";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "../features/api/favoritesSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export const FavFilm = ({ title }) => {
  const dispatch = useDispatch();

  const { movieTitle } = useParams();

  const film = movieTitle ? movieTitle : title;

  const { data, error, isLoading } = useGetFilmQuery(film);

  if (error) return <div>Error while fetch film</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data.Title) return <div>{`${title}: not found `}</div>;

  return (
    <div className="fav-item">
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
          <IconButton
            sx={{ height: "30px", width: '30px' }}
            onClick={() => dispatch(removeFav(data.Title))}
            aria-label="delete"
          >
            <DeleteIcon className="remove-btn" />
          </IconButton>
        </div>
      )}
    </div>
  );
};
