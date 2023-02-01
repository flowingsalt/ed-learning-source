import axios from 'axios';
import { testAxiosError } from '../utils/checkError.util';
import { retryRequest, setRetryExpiryAndInterval } from '../utils/retryRequest.util';
import { mainCorrelationId } from '../utils/correlationIdHelper';
export var axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(function (config) {
  config.headers.CorrelationId = mainCorrelationId();
  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var config = error.config,
      status = error.response.status; // this 514 error happens when the school doesn't have entitlements to the content being launched
  // e.g where entitlements have expired and where students are rostered to multiple schools but the teacher is rostered to a single school.

  if (status === 514) {
    return error;
  }

  if (status > 500) {
    return retryRequest(axiosInstance, setRetryExpiryAndInterval(config), error);
  }

  testAxiosError(error);
  return Promise.reject(error);
});
export var setApiRootUrl = function setApiRootUrl() {
  axiosInstance.defaults.baseURL = 'https://ed.cert.br.hmheng.io';
};