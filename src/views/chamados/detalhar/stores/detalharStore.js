import {decorate, observable} from 'mobx';

class detalharStore {
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

  markers = [
    {
      title: 'Energia',
      latitude: 37.78025,
      longitude: -122.4324,
    },
    {
      title: 'Buraco',
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      title: 'Esgoto',
      latitude: 37.79325,
      longitude: -122.4384,
    },
    {
      title: 'Cerveja',
      latitude: 37.77825,
      longitude: -122.439,
    },
  ];
}

decorate(detalharStore, {
  categorias: observable,
  markers: observable,
});

export default new detalharStore();
