import NavLinks from "../NavLinks/NavLinks";
import MyMovies from "../MyMovies/MyMovies";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header>
      <Link to='/'>
        <h1>
          Movie<span style={{ color: "rgb(222, 215, 121)" }}>DB</span>
        </h1>
      </Link>
      <div>
        <NavLinks />
        <MyMovies />
      </div>
    </header>
  );
}

export default Header;
