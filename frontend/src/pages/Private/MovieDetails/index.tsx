import './styles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Review } from 'types/reviews';
import ReviewForm from 'components/ReviewForm';
import { hasAnyRoles } from 'util/auth';
import ReviewList from 'components/ReviewList';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

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


  // Para funcionar quando salva uma nova avaliação renderiza o componente novamente
  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  }

  return (
    <div className="moviedetails-container">
      <div className="moviedetails-content-container">
        <h1>Tela detalhes do filme id: {movieId}</h1>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />}
      
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
