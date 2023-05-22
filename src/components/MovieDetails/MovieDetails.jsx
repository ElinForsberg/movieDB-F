import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetails() {
  const [movie, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();

      setMovie(data);
    };
    fetchMovie();
  }, []);

  return movie ? (
    <div className='movie_details'>
      <div
        className='image_container'
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <div className='overlay'></div>
      </div>
      <div className='movie_info'>
        <div className='top_info'>
          <div className='release_info'>
            <p
              style={{
                backgroundColor:
                  movie.status === "Released"
                    ? "rgb(129, 229, 207)"
                    : "rgb(229, 129, 144)",
              }}
            >
              {movie.status}
            </p>
            <p>Release Date: {movie.release_date}</p>
          </div>

          <div className='rating_info'>
            {/* <FaImdb /> */}
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>

          <div className='genre_info'>
            {movie.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <MarkAsSeenBtn movie={movie} />
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default MovieDetails;
