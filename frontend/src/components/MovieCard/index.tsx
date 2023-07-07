import './styles.css';


import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
}

const MovieCard = ( { movie } : Props ) => {
  return (
    <>
      <div className="base-card movie-card">
        <div className="card-top-container">
            <img src={movie.imgUrl} alt={movie.title} />
        </div>
        <div className="card-bottom-container">
          <h2>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <h4>{movie.subTitle}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
