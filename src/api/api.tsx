import axios from 'axios';
import { ACCESS_TOKEN } from '../constants/constants';

export const baseURL: string = import.meta.env.VITE_SERVER_URL;
const REDIRECT_URL: string = baseURL + import.meta.env.VITE_REDIRECT_URI;

export const api = axios.create({
  baseURL: `${baseURL}`,
  withCredentials: true,
});

const getNewAcessToken = () => {
  api
    .post(REDIRECT_URL, {
      accessToken: localStorage.getItem(ACCESS_TOKEN),
    })
    .then((res) => {
      console.log(res);
      return res.data.accessToken;
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

api.interceptors.request.use(
  (config) => {
    const accessToken: string | null = localStorage.getItem(ACCESS_TOKEN);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => {
    return err;
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const { config, res } = err;

    if (res.status !== 401 || config.sent || config.url === REDIRECT_URL) {
      return err;
    }

    console.log('res: ', res);
    config.sent = true;
    await console.log('새로운 엑세스 토큰:', getNewAcessToken());
  }
);
