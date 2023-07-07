import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Genre } from 'types/genre';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import './styles.css';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {

  // Estado que armazena a lista de genres buscada do backend
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };


  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/genres',
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      //.content porque a busca é paginada
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="base-card movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="movie-filter-genre-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                isClearable
                placeholder="Gênero"
                classNamePrefix="genre-filter-select"
                // Value - valor que mudou (ele espera isso)
                onChange={(value) => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;
