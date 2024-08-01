import api from "../api";

export const userApi = {
  createUser: () => api.get('v1/auth/kakao/login'),
}

