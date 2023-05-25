/* eslint-disable react/prop-types */
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./MovieCard.css";

function MovieCard({ movie }) {
  const trunc = (str) => {
    return str.slice(0, 20) + "...";
  };

  return (
    <Card sx={{ width: 350 }} style={{ position: "relative" }}>
      <CardMedia
        component='img'
        alt={movie.title}
        height='500'
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <div className='movie_card_info'>
        <CardContent>
          <Typography gutterBottom variant='p' component='div'>
            {trunc(movie.title)}
          </Typography>
          <Typography variant='body2'>Seen it</Typography>
        </CardContent>
        <CardActions>
          <MarkAsSeenBtn movie={movie} />
        </CardActions>
      </div>
    </Card>
  );
}

export default MovieCard;
