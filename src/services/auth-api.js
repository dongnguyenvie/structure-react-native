import {apiRequest, checkResponse} from './base-api';

export const apiLogin = (body) => (
  apiRequest('POST', '/auth/login', body)
  .then((res) => {
    if (checkResponse(res)) {
      return {
      };
    } else {
      return {

      }
    }
  })
  .catch((err) => ({err}))
);