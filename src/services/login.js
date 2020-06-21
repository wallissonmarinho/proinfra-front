import api from '../config/api';

const LoginService = {
  login: (login) => api.post('/login', login),
  obterIdClienteLogado: (token) =>
    api.get('/clientes/clienteLogado', {
      headers: {
        Authorization: token,
      },
    }),
};

export default LoginService;
