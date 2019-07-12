const HTTP_OK = 200;
import axios from 'axios';
import {k_USERINFO} from '@constants/storage-constants'
import {store} from '../App';
import {DEVELOP_FLAG} from '@constants/action-names';
/** CHANGE URL DEVELOPMENT AND PRODUCTION
 *developFlag = true : DEVELOPMENT
 *developFlag = false : PRODUCTION
 * */
let baseURL = '';
DEVELOP_FLAG == true ? (baseURL = '') : (baseURL = '');

/** Interceptors for catch ERROR request 
* */
axios.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response && error.response.status && error.response.status === 401
    && !originalRequest._retry) {
    originalRequest._retry = true;
    let refreshTk = null;
    const userInfo = await getKeyAsyncStorage(k_USERINFO);
    if (userInfo) {
      const {refreshToken: reToken} = userInfo;
      refreshTk = reToken;

      // return refreshToken(refreshTk)
      // .then((authToken) => {
      //   userInfo.authToken = authToken;
      //   store.dispatch(loginSuccess(userInfo));
      //   // axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;
      //   originalRequest.headers['Authorization'] = 'Bearer ' + authToken;
      //   if (originalRequest.url.includes('/auth/validate/')) {
      //     originalRequest.url = originalRequest.baseURL + '/auth/validate/' + authToken;
      //   }
      //   return axios(originalRequest);
      // })
      // .catch(() => {
      //   // navigateToLogin();
      // });
    } else {return Promise.reject(error);}
  } else {
    return Promise.reject(error);
  }
});

const api = (method, endpoint, body, optionalHeaders) => {
  const options = {
    baseURL: baseURL,
    endpoint: endpoint,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...optionalHeaders
    }
  };
  return axios({
    baseURL: options.baseURL,
    headers: options.headers,
    ...optionalHeaders,
    method: options.method,
    url: options.endpoint,
    timeout: 15000,
    data: method == 'GET' ? undefined : body
  });
};
const apiUpload = (method, endpoint, body, optionalHeaders) => {
  const options = {
    baseURL: baseURL,
    endpoint: endpoint,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...optionalHeaders
    }
  };
  return axios({
    baseURL: options.baseURL,
    headers: options.headers,
    ...optionalHeaders,
    method: options.method,
    url: options.endpoint,
    data: method == 'GET' ? undefined : body
  });
};
export const apiRequestUpload = (method, endpoint, body, optionalHeaders = {}) => (
  apiUpload(method, endpoint, body, optionalHeaders)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
);
export const apiRequest = (method, endpoint, body, optionalHeaders = {}) => (
  api(method, endpoint, body, optionalHeaders)
    .then((res) => {
      // debugger
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    })
);

export const checkResponse = (res) => {
  if (res.statusCode === HTTP_OK) {
    return true;
  }
  throw new Error(`${res.statusMessage} - ${res.result.reason}`);
};

export default api;
