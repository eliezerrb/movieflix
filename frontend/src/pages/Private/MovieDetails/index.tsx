import './styles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Review } from 'types/reviews';
import ReviewForm from 'components/ReviewForm';
import { hasAnyRoles } from 'util/auth';
import ReviewList from 'components/ReviewList';
import { Movie } from 'types/movie';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      // Atribuindo o resultado do response para o Product com a função setProduct
      setReviews(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(config).then((response) => {
      // Atribuindo o resultado do response para o Movie com a função setMovie
      setMovie(response.data);
    });
  }, [movieId]);

  // Para funcionar quando salva uma nova avaliação renderiza o componente novamente
  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="moviedetails-container">
      <div className="base-card moviedetails-content-container">
        <div className="row">
          <div className="col-xl-6">
            <img
              className="moviedetails-img"
              src={movie?.imgUrl}
              alt={movie?.title}
            />
          </div>
          <div className="col-xl-6 moviedetails-description">
            <h2>{movie?.title}</h2>
            <h3>{movie?.year}</h3>
            <h4>{movie?.subTitle}</h4>
            <div className="moviedetails-synopsis">
              <h5>{movie?.synopsis}</h5>
            </div>
          </div>
        </div>
      </div>

      {hasAnyRoles(['ROLE_MEMBER']) && (
        <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
      )}

      <ReviewList reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
