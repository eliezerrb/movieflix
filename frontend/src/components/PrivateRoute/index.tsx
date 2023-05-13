import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/auth';

type Props = {
  children: React.ReactNode;
  path: string;
};

// Vou renderizar o Children que você me informar se tiver autenticado
// Se não informar o roles vai ser igual lista vazia
const PrivateRoute = ({ children, path}: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/',
              // permitir redirecionar, após o login para a página protegida que foi chamada
              state: { from: location },
            }}
          />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;
