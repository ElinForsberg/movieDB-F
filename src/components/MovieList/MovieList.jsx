import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { Link, useSearchParams } from "react-router-dom";

import "./MovieList.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filterParams, setFilterParams] = useSearchParams({
    filter: "popular",
  });

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filterParams.get(
        "filter"
      )}?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [filterParams]);

  return (
    <div className='movie_list'>
      <div className='movie_list_filter'>
        <h4>Filter movies</h4>
        <FilterDropDown
          filter={filterParams.get("filter")}
          setFilter={setFilterParams}
        />
      </div>
      <h2>
        {filterParams.get("filter") != "top_rated"
          ? filterParams.get("filter") + " Movies"
          : "Top Rated Movies"}
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
