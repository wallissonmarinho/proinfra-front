import api from '../config/api';

const CadastroService = {
  cadastrar: (cadastro) => api.post('/clientes/cadastrar', cadastro),
};

export default CadastroService;
