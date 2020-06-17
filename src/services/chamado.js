import api from '../config/api';
import Token from './token';

const ChamadoService = {
  listarCategoriasAtivas: () =>
    api.get('/categorias/ativas', {
      validateStatus: (status) => status < 500,
    }),
  criarChamado: (chamado) =>
    api.post('/chamados', chamado, {
      header: {
        Authorization: Token.obterToken(),
      },
    }),
};

export default ChamadoService;
