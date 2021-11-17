import axios from 'axios';
import { SERVER_API } from '../constants/config';

const request = axios.create({
  baseURL: SERVER_API,
  headers: {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',

    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

// request.interceptors.request.use(async config => {
//   const tokenI = localStorage.getItem('token')
//     ? localStorage.getItem('token')
//     : null;
//   if (tokenI) {
//     const token = await tokenI;
//     config.headers.Authorization = `Bearer ${token}`;
//     console.log('token', token);
//   }
//   return config;
// });

export default request;
