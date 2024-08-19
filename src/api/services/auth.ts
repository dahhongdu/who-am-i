import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../constants/constants';
import { setCookie } from '../../utils/Cookies';
import { baseURL, api } from '../api';

const kakaoAuthURL = baseURL + import.meta.env.VITE_KAKAO_LOGIN_URI;

export const userApi = {
  getKakaoOauth: kakaoAuthURL,
  kakaoAuth: async (code: string): Promise<boolean> => {
    try {
      const res = await api.get(
        `${import.meta.env.VITE_KAKAO_CALLBACK_URI}?code=${code}`
      );

      const data = res.data.data;
      const accessToken: string = data.accessToken;
      const refreshToken: string = data.refreshToken;

      if (accessToken) {
        localStorage.setItem(ACCESS_TOKEN, accessToken);
      }

      if (refreshToken) {
        setCookie(REFRESH_TOKEN, refreshToken, {
          path: '/',
          secure: true,
          httpOnly: true,
        });
      }

      return true;
    } catch (err) {
      console.log('err: ', err);
      return false;
    }
  },

  // const res = await api
  //   .get(`${import.meta.env.VITE_KAKAO_CALLBACK_URI}?code=${code}`)
  //   .then((res) => {
  //     const data = res.data.data;
  //     const accessToken: string = data.accessToken;
  //     const refreshToken: string = data.refreshToken;

  //     if (accessToken) {
  //       localStorage.setItem(ACCESS_TOKEN, accessToken);
  //     }

  //     if (refreshToken) {
  //       setCookie(REFRESH_TOKEN, refreshToken, {
  //         path: '/',
  //         secure: true,
  //         httpOnly: true,
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     console.log('err: ', err);
  //   });
  // },
};
