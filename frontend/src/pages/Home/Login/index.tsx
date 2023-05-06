import './styles.css';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {

  const {
    register,
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (formData : FormData) => {
    requestBackendLogin(formData)
    .then(response => {
      console.log('SUCESSO', response);
    })
    .catch(error => {
      console.log('ERRO', error);
    });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*mb-4: Classe bootStrap margin botton 4 espaço abaixo para outro imput*/}
        {/*form-control: Classe bootStrap que coloca borda no imput, largura 100% */}
        <div className="mb-4">
          <input
            {...register("username")}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />
        </div>
        <div className="mb-5">
          <input
            {...register("password")}
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