import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-85-147-210.compute-1.amazonaws.com:8080',
});

export default api;
