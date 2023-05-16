import Button from 'components/Button';
import './styles.css';
import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';

type Props = {
  movieId: string;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        console.log('SUCESSO AO SALVAR', response);
      })
      .catch((error) => {
        console.log('ERRO AO SALVAR', error);
      });
  };

  return (
    <>
      <div className="base-card review-form-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('text', { required: 'Campo obrigatório,' })}
            type="text"
            name="text"
            placeholder="Deixe sua avaliação aqui"
            className="aval-imput"
          />
          <div>{errors.text?.message}</div>
          <div className=" review-form-container-button">
            <Button text="SALVAR AVALIAÇÃO" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
