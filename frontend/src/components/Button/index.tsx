import './styles.css';

type Props = {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <>
      {/* btn - efeito de opacidade ao passar o mouse(bootstrap) */}
      <div className="btn-container">
        <button type="submit" className="btn btn-primary btn-lg">
          <h6>{text}</h6>
        </button>
      </div>
    </>
  );
};

export default Button;
