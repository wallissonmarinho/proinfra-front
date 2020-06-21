import {decorate, observable, action} from 'mobx';
import {LoginService, Subject} from '../../../services';
import {mensagem} from '../../../helpers';

class LoginStore {
  login = {
    email: 'matheus.lucassilva@gmail.com',
    senha: '12345',
  };

  usuario = {
    cod_usuario: 0,
    data_nascimento: null,
    email: null,
    nome: null,
    telefone: null,
  };

  reset() {
    this.login = {
      email: null,
      senha: null,
    };
  }

  resetUsuario() {
    this.usuario = {
      cod_usuario: 0,
      data_nascimento: null,
      email: null,
      nome: null,
      telefone: null,
    };
  }

  handleChangeUsuario(name, value) {
    this.usuario[name] = value;
  }

  handleChangeEmail(text) {
    this.login.email = text;
  }

  handleChangeSenha(text) {
    this.login.senha = text;
  }

  async logar(navigation) {
    try {
      const result = await LoginService.login(this.login);

      if (result.status === 401) {
        mensagem.error('Usuário e/ou senha incorreto(s)!');
      }

      if (result.status === 403) {
        mensagem.error('Usuário não encontrado!');
      }

      if (result.status === 200) {
        this.usuario = await this.obterIdClienteLogado(
          result.headers.authorization,
        );

        const subject = {
          token: result.headers.authorization,
          usuario: this.usuario,
        };

        await Subject.salvarSubject(subject);
        navigation.navigate('HomeTabs');
        this.reset();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async obterIdClienteLogado(token) {
    try {
      const result = await LoginService.obterIdClienteLogado(token);

      if (result.status === 200) {
        return result.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async logout(navigation) {
    await Subject.removerSubject();
    navigation.navigate('Login');
    this.resetUsuario();
  }
}

decorate(LoginStore, {
  login: observable,
  usuario: observable,
  resetUsuario: observable,
  logar: action.bound,
  obterIdClienteLogado: action.bound,
  handleChangeUsuario: action.bound,
  logout: action.bound,
});

export default new LoginStore();
