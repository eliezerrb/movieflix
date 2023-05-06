import Button from 'components/Button';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="moviedetails-container">
      <div className="moviedetails-content-container">
        <h1>Tela detalhes do filme id: 1</h1>
      </div>
      <div className="base-card moviedetails-card">
        <form action="">
          <input
            type="text"
            name="avaliacao"
            placeholder="Deixe sua avaliação aqui"
            className="aval-imput"
          />

          <div className="moviedetails-container-button">
            <Button text="SALVAR AVALIAÇÃO" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieDetails;
