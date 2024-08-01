import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/`,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    alert('success')
    // 성공적인 응답을 그대로 반환
    return response;
  },
  (error) => {
    // 에러 응답 처리
    const { response } = error;

    if (response) {
      // 서버로부터 받은 상태 코드가 리다이렉트 코드인지 확인
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        // 리다이렉트 전 처리할 로직
        console.log('리다이렉트 처리 전에 필요한 작업을 수행합니다.');
        // 예를 들어, 사용자에게 경고를 표시하거나 로그를 남길 수 있습니다.
      }
    }

    // 에러를 반환하여 이후 처리에 영향을 주도록 함
    return Promise.reject(error);
  }
);

export default api;
