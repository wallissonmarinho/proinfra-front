import {decorate, observable, action} from 'mobx';
import {CadastroService} from '../../../services';
import {mensagem} from '../../../helpers';

class CadastroStore {
  cadastro = {
    cpf: null,
    data_nascimento: null,
    email: null,
    nomeCompleto: null,
    senha: null,
    telefone: null,
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

  async cadastrar(navigation) {
    try {
      const result = await CadastroService.cadastrar(this.cadastro);

      if (result.status === 422) {
        mensagem.error('Usuário já cadastrado!');
      }

      if (result.status === 200) {
        navigation.navigate('Login');
        mensagem.info('Usuário cadastrado com sucesso!');
        this.reset();
      }
    } catch (e) {
      console.log(e);
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
