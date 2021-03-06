import api from '../config/api';

const LoginService = {
  login: (login) =>
    api.post('/login', login, {
      validateStatus: (status) => status < 500,
    }),
  obterIdClienteLogado: (token) =>
    api.get('/clientes/clienteLogado', {
      headers: {
        Authorization: token,
      },
    }),
};

export default LoginService;
