import Button from 'components/Button';
import './styles.css';

const ReviewForm = () => {
  return (
    <>
      <div className="base-card review-form-card">
        <form action="">
          <input
            type="text"
            name="avaliacao"
            placeholder="Deixe sua avaliação aqui"
            className="aval-imput"
          />

          <div className=" review-form-container-button">
            <Button text="SALVAR AVALIAÇÃO" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
