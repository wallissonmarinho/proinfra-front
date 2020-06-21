import api from '../config/api';

const ChamadoService = {
  listarCategoriasAtivas: () =>
    api.get('/categorias/ativas', {
      validateStatus: (status) => status < 500,
    }),
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
