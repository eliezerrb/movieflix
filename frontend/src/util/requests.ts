import axios from 'axios';
import qs from 'qs';

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

// usado no login
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  // headers - tem que ser esse nome, pois é os parametros do Axios "AxiosRequestConfig"
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    
  };

  // qs - biblioteca
  // função stringify gera o urlencoded equivalente ao obj
  // ... expred operator para já aproveitar o valor que vem no tipo loginData
  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  //  não precisa colocar a assim data: data (no javaScript quando o nome do atributo for igual a variavel ele já entende)
  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};
