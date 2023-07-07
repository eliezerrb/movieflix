import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';
import { Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';

// Guardar os dados dos componentes que controlam a listagem (Paginate e a busca) dados dos componentes de controle
type ControlComponentsData = {
  //número da página que está ativa, esse número vem do componente de paginção
  activePage: number;
  FilterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  // Vai manter os dados de todos os camponentes que fazem o controle da listagem
  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    activePage: 0,
    FilterData: { genre: null },
  });

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.FilterData.genre?.id
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);


   // Atualizando o estado que o componente paginate devolveu
   const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, FilterData: controlComponentsData.FilterData });
  };

  // Quando alterar um filtro quero voltar para a primeira página
  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, FilterData: data });
  };

  return (
    <div className="moviecatalog-container">
      <MovieFilter onSubmitFilter={handleSubmitFilter} />
      <div className="row">
        {page?.content.map((movie) => (
          <div
            className="col-sm-6 col-lg-4 col-xl-3 moviecatalog-content-container"
            key={movie.id}
          >
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        OnChange={handlePageChange}
      />

    </div>
  );
};

export default MovieCatalog;
