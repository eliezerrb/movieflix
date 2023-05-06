import './styles.css';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';

const Login = () => {


  const {
    register,
    handleSubmit,
  } = useForm<FormData>();


  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form>
        {/*mb-4: Classe bootStrap margin botton 4 espaço abaixo para outro imput*/}
        {/*form-control: Classe bootStrap que coloca borda no imput, largura 100% */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="login-submit">
          <Button text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;