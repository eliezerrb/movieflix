import { useEffect, useState } from 'react';
import './styles.css';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Movie } from 'pages/types/movie';
import { SpringPage } from 'pages/types/vendor/spring';
import { Link } from 'react-router-dom';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="moviecatalog-container">
      <h1>Tela Listagem de filmes</h1>
      {page?.content.map((item) => (
        <div className="moviecatalog-content-container" key={item.id}>
          
          <Link to={`/movies/${item.id}`}>
            <h2>Acessar/movies/{item.id}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieCatalog;
