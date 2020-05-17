import {decorate, observable, action, computed, toJS, runInAction} from 'mobx';

class categoriaStore {
  categorias = [
    {
      id: 1,
      nome: "Iluminação",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },
    {
      id: 2,
      nome: "Saneamento",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },
    {
      id: 3,
      nome: "Buraco Na Pista",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },
    {
      id: 4,
      nome: "Iluminação",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },

    {
      id: 5,
      nome: "Saneamento",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },
    {
      id: 6,
      nome: "Buraco Na Pista",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },

    {
      id: 7,
      nome: "Iluminação",
      icone: "arrow-left-bold-box-outline",
      rota: "adefinir",
    },
  ];

  dados = [
    {nome: 'Linha 1'},
    {nome: 'Linha 2'},
    {nome: 'Linha 3'},
    {nome: 'Linha 4'},
    {nome: 'Linha 5'},
    {nome: 'Linha 6'},
    {nome: 'Linha 7'},
    {nome: 'Linha 8'},
    {nome: 'Linha 9'},
    {nome: 'Linha 10'},
    {nome: 'Linha 11'},
    {nome: 'Linha 12'},
    {nome: 'Linha 13'},
    {nome: 'Linha 14'},
    {nome: 'Linha 15'},
    {nome: 'Linha 16'},
    {nome: 'Linha 17'},
  ]
}

decorate(categoriaStore, {
  categorias: observable,
  dados: observable,
});

export default new categoriaStore();
