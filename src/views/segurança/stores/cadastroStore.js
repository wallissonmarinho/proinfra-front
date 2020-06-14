import {decorate, observable, action} from 'mobx';
import {CadastroService} from '../../../services';
import {mensagem} from '../../../helpers';
import {mask, unMask} from 'remask';

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
    this.cadastro.cpf = mask(text, ['999.999.999-99']);
  }

  handleChangeDataNascimento(text) {
    this.cadastro.data_nascimento = mask(text, ['99/99/9999']);
  }

  handleChangeEmail(text) {
    this.cadastro.email = text;
  }

  handleChangeSenha(text) {
    this.cadastro.senha = text;
  }

  handleChangeTelefone(text) {
    this.cadastro.telefone = mask(text, ['(99) 9 9999-9999']);
  }

  async cadastrar(navigation) {
    const cadastrar = {
      cpf: unMask(this.cadastro.cpf),
      data_nascimento: unMask(this.cadastro.data_nascimento),
      email: this.cadastro.email,
      nomeCompleto: this.cadastro.nomeCompleto,
      senha: this.cadastro.senha,
      telefone: unMask(this.cadastro.telefone),
    };

    try {
      const result = await CadastroService.cadastrar(cadastrar);

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
