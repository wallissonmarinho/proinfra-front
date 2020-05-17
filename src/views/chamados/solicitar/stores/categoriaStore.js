import {decorate, observable, action, computed, toJS, runInAction} from 'mobx';

class categoriaStore {
  categorias = [
    {
      nome: "Inspecionar Veículo",
      id: 1,
      classificacao: "IconCatgVeiculo",
      rota: "BuscaVeiculo",
    },
    {
      nome: "Inspecionar Gerador",
      id: 4,
      classificacao: "IconCatgGerador",
      rota: "BuscaGerador",
    },
    {
      nome: "Inspecionar EPI",
      texto: "os EPIs desejados",
      id: 3,
      classificacao: "IconCatgEPI",
      rota: "BuscaObjeto",
    },
    {
      nome: "Inspecionar Kit de Ferramentas",
      texto: "as Ferramentas desejadas",
      id: 2,
      classificacao: "IconMecanica",
      rota: "BuscaObjeto",
    },

    {
      nome: "Inspecionar Loja",
      texto: "as Lojas desejadas",
      id: 5,
      classificacao: "IconCatgLoja",
      rota: "BuscaObjeto",
    },
    {
      nome: "Inspecionar Imóvel",
      texto: "os Imóveis desejados",
      id: 7,
      classificacao: "IconCatgImovel",
      rota: "BuscaObjeto",
    },

    {
      nome: "Inspecionar Data Center",
      texto: "os Data Centers desejados",
      id: 6,
      classificacao: "IconCatgDataCenter",
      rota: "BuscaObjeto",
    },
  ];
}

decorate(categoriaStore, {
  categorias: observable,
});

export default new categoriaStore();
