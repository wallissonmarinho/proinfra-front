import {decorate, observable, action, computed, toJS, runInAction} from 'mobx';

class categoriaStore {
  categorias = [
    {
      id: 1,
      nome: "Água / Esgoto",
      icone: "water-pump",
      rota: "adefinir",
    },
    {
      id: 3,
      nome: "Energia",
      icone: "flash",
      rota: "adefinir",
    },
    {
      id: 4,
      nome: "Obstrução",
      icone: "sign-caution",
      rota: "adefinir",
    },

    {
      id: 5,
      nome: "Vias",
      icone: "road",
      rota: "adefinir",
    },
    {
      id: 6,
      nome: "Outros",
      icone: "help-circle",
      rota: "adefinir",
    },
  ];

}

decorate(categoriaStore, {
  categorias: observable,
});

export default new categoriaStore();
