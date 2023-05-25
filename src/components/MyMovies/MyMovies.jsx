import { useState } from "react";
import { FiEye } from "react-icons/fi";
import MovieDrawer from "../MovieDrawer/MovieDrawer";

import "./MyMovies.css";

function MyMovies() {
  const [open, setOpen] = useState(false);

  return (
    <div className='my_movies' onClick={() => setOpen(true)}>
      <p>0</p>
      <FiEye />
      <MovieDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

export default MyMovies;
