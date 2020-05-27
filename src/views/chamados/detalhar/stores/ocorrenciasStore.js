import {decorate, observable} from 'mobx';

class ocorrenciasStore {
  categorias = [
    {
      id: 1,
      tipo: 'Água / Esgoto',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'water-pump',
    },
    {
      id: 3,
      tipo: 'Energia',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'flash',
    },
    {
      id: 4,
      tipo: 'Obstrução',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'sign-caution',
    },

    {
      id: 5,
      tipo: 'Vias',
      data: '11/03/2020',
      status: 'Em Analise',
      icone: 'road',
    },
    {
      id: 6,
      tipo: 'Energia',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'flash',
    },
  ];
}

decorate(ocorrenciasStore, {
  categorias: observable,
});

export default new ocorrenciasStore();
