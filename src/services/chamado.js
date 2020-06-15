import api from '../config/api';

const ChamadoService = {
  listarCategoriasAtivas: () =>
    api.get('/categorias/ativas', {
      validateStatus: (status) => status < 500,
    }),
};

export default ChamadoService;
