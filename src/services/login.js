import api from '../config/api';

const LoginService = {
  login: login =>
    api.post('/api/login', login, {
      validateStatus: status => status < 500,
    }),
};

export default LoginService;
