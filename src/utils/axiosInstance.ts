import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://interview-backend-p6gz.onrender.com:10000',
});

export default instance;
