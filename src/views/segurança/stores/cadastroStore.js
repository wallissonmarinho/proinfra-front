import {decorate, observable, action, computed, toJS, runInAction} from 'mobx';
import {CadastroService} from '../../../services';

class CadastroStore {
  cadastro = {
    cpf: '10471607495',
    data_nascimento: '13081994',
    email: 'matheuslucas.ssilva@gmail.com',
    nomeCompleto: 'Matheus',
    senha: 'qwe123',
    telefone: '83987144447',
  };

  reset() {
    this.cadastro = {
      cpf: null,
      data_nascimento: null,
      email: null,
      nomeCompleto: null,
      senha: null,
      telefone: null,
    };
  }

  teste = {};

  handleChangeNome(text) {
    this.cadastro.nomeCompleto = text;
  }

  handleChangeCPF(text) {
    this.cadastro.cpf = text;
  }

  handleChangeDataNascimento(text) {
    this.cadastro.data_nascimento = text;
  }

  handleChangeEmail(text) {
    this.cadastro.email = text;
  }

  handleChangeSenha(text) {
    this.cadastro.senha = text;
  }

  handleChangeTelefone(text) {
    this.cadastro.telefone = text;
  }

  async cadastrar() {
    try {
      const result = await CadastroService.cadastrar(this.cadastro);

      console.log(result);

      if (!result) {
        return console.warn('ERRO');
      }

      runInAction(() => {
        this.teste = result;
        console.warn(this.teste);
      });
    } catch (e) {
      console.error(e);
    }
  }
}

decorate(CadastroStore, {
  cadastro: observable,
  teste: observable,
  handleChange: action.bound,
  handleChangeCPF: action.bound,
  handleChangeDataNascimento: action.bound,
  handleChangeTelefone: action.bound,
  handleChangeEmail: action.bound,
  handleChangeSenha: action.bound,
});

export default new CadastroStore();
