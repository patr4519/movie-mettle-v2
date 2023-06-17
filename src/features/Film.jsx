import { useGetFilmQuery } from "./api/apiSlice";

export const Film = ({ title }) => {
  const { data, error, isLoading } = useGetFilmQuery(title);

  if (error) return <div>Error while fetch film</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data.Title) return <div>{`${title}: not found `}</div>;

  return (
    <>
      {data.Title && (
        <div className="movie-item">
          {data.Title && (
            <div className="content">
              <a href="/" className="poster-link">
                <img
                  className="poster"
                  src={data.Poster}
                  alt="poster"
                  width={100}
                />
              </a>
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
      )}
    </>
  );
};
