import api from '../config/api';

const ChamadoService = {
  listarCategoriasAtivas: () => api.get('/categorias/ativas'),
  criarChamado: (chamado, token) =>
    api.post('/chamados/cadastrar', chamado, {
      headers: {
        Authorization: token,
      },
    }),
  listarChamadosUsuario: (token) =>
    api.get('/chamados/porClienteLogado', {
      headers: {
        Authorization: token,
      },
    }),
};

export default ChamadoService;
