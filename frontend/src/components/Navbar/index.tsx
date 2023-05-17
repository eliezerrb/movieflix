import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import './styles.css';
import { getTokenData, isAuthenticated } from 'util/auth';
import history from 'util/history';
import { removeAuthData } from 'util/requests';
import { AuthContext } from 'AuthContext';


const Navbar = () => {

  // Declaração referencia para o contexto global
  const { authContextData, setAuthContextData } = useContext(AuthContext);


  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // event.preventDefault() - para não haver a navegação do link
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="bg-primary navbar main-nav">
      <Link onClick={handleLogoutClick} to="/" className="nav-logo-text">
        <h4>MovieFlix</h4>
      </Link>
      {authContextData.authenticated && (
        <>
          <div className="nav-login-logout">
            <a href="#logout" onClick={handleLogoutClick}>
              SAIR
            </a>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
