import { Review } from 'types/reviews';
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
          <div className="base-card reviewList-container"  key={review.id}>
            <div className=" reviewList-content-container">
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
