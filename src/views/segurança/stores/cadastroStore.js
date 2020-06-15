import {decorate, observable, action} from 'mobx';
import {CadastroService} from '../../../services';
import {mensagem} from '../../../helpers';
import {mask, unMask} from 'remask';

class CadastroStore {
  cadastro = {
    nome: null,
    cpf: null,
    data_nascimento: null,
    email: null,
    senha: null,
    telefone: null,
  };

  reset() {
    this.cadastro = {
      nome: null,
      cpf: null,
      data_nascimento: null,
      email: null,
      senha: null,
      telefone: null,
    };
  }

  handleChangeNome(text) {
    this.cadastro.nome = text;
  }

  handleChangeCPF(text) {
    this.cadastro.cpf = mask(text, ['999.999.999-99']);
  }

  handleChangeDataNascimento(text) {
    this.cadastro.data_nascimento = mask(text, ['99/99/9999']);
  }

  handleChangeTelefone(text) {
    this.cadastro.telefone = mask(text, ['(99) 9 9999-9999']);
  }

  handleChangeEmail(text) {
    this.cadastro.email = text;
  }

  handleChangeSenha(text) {
    this.cadastro.senha = text;
  }

  async cadastrar(navigation) {
    try {
      this.cadastro = {
        ...this.cadastro,
        cpf: unMask(this.cadastro.cpf),
        data_nascimento: unMask(this.cadastro.data_nascimento),
        telefone: unMask(this.cadastro.telefone),
      };

      const result = await CadastroService.cadastrar(this.cadastro);

      if (result.status === 400) {
        mensagem.error('Usuário já cadastrado!');
        this.reset();
      }

      if (result.status === 201) {
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
