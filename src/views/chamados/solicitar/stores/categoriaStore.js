import {decorate, observable, action, computed, toJS, runInAction} from 'mobx';

class categoriaStore {
  categorias = [
    {
      id: 1,
      nome: "Água / Esgoto",
      icone: "water-pump",
    },
    {
      id: 3,
      nome: "Energia",
      icone: "flash",
    },
    {
      id: 4,
      nome: "Obstrução",
      icone: "sign-caution",
    },

    {
      id: 5,
      nome: "Vias",
      icone: "road",
    },
    {
      id: 6,
      nome: "Outros",
      icone: "help-circle",
    },
  ];

}

decorate(categoriaStore, {
  categorias: observable,
});

export default new categoriaStore();
