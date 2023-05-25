import { useState, useEffect } from "react";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import { useParams } from "react-router-dom";
import { FaImdb } from "react-icons/fa";

import "./MovieDetails.css";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
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
            <FaImdb />
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
