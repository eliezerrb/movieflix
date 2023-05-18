import { Review } from 'pages/types/reviews';
import { ReactComponent as StarIcon } from 'assets/images/star.svg';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props) => {
  return (
    <>
      {reviews.map((review) => {
        return (
          <div className="base-card reviewList-container">
            <div className=" reviewList-content-container" key={review.id}>
              <h3 className="reviewList-nome">
                {' '}
                <StarIcon />
                {review.user.name}
              </h3>
              <p className="reviewList-description">{review.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewList;
