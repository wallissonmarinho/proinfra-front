import api from '../config/api';

const CadastroService = {
  cadastrar: cadastro =>
    api.post('/api/usuario', cadastro, {
      validateStatus: status => status < 500,
    }),
};

export default CadastroService;
