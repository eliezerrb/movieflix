import Button from 'components/Button';
import './styles.css';
import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import { Review } from 'types/reviews';

type Props = {
  movieId: string;
  // Para disparar um evento informando que salvou uma avaliação para atualizar o reviewList
  onInsertReview: (Review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
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
        setValue('text', '');
        onInsertReview(response.data);
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
            {...register('text', { required: 'Campo obrigatório' })}
            type="text"
            name="text"
            placeholder="Deixe sua avaliação aqui"
            className="aval-imput"
          />
          <div className="invalid-feedback d-block required-field">{errors.text?.message}</div>
          <div className=" review-form-container-button">
            <Button text="SALVAR AVALIAÇÃO" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewForm;
