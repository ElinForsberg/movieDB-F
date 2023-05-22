import FilterDropDown from "../FilterDropDown/FilterDropDown";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useSearchParams({ filter: "popular" });

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${filter.get("filter")}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await res.json();

      setMovies(data.results);
    };
    fetchMovies();
  }, [filter]);

  return (
    <div className='movie_list'>
      <div className='movie_list_filter'>
        <h4>Filter movies</h4>
        <FilterDropDown filter={filter.get("filter")} setFilter={setFilter} />
      </div>
      <h2>
        {filter.get("filter") === "top_rated"
          ? "Top Rated"
          : filter.get("filter")}{" "}
        movies
      </h2>
      <div className='movie_grid'>
        {movies.map((movie) => (
          <Link to={`/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
