import api from '../config/api';

const CadastroService = {
  cadastrar: cadastro => api.post('/api/usuario', cadastro),
};

export default CadastroService;
