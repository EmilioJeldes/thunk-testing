import axios from 'axios';

const createResponse = res => ({ data: res.data, status: res.status, statusText: res.statusText });

const createErrorResponse = error => ({
  error: true,
  status: error.response.status,
  statusText: error.response.statusText,
  message: error.message
});

const createHeaders = custom => ({ 'Content-type': 'application/json; charset=UTF-8', ...custom });

const request = (url, method = 'GET', data = {}, headers) =>
  axios({ method, url, data, headers: createHeaders(headers) }).then(
    res => createResponse(res),
    error => createErrorResponse(error)
  );

export default request;
