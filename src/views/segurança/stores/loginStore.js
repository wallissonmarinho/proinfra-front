import {decorate, observable, action} from 'mobx';
import {LoginService, Token} from '../../../services';
import {mensagem} from '../../../helpers';

class LoginStore {
  login = {
    email: null,
    senha: null,
  };

  reset() {
    this.login = {
      email: null,
      senha: null,
    };
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

      if (!result.headers.authorization || result.status === 404) {
        mensagem.error('Erro ao efetuar o login! Por favor, tente novamente.');
      }

      await Token.salvarToken(result.headers.authorization);

      if (result.status === 401) {
        mensagem.error('Usuário e/ou senha incorreto(s)!');
      }

      if (result.status === 403) {
        mensagem.error('Usuário não encontrado!');
      }

      if (result.status === 200) {
        navigation.navigate('HomeTabs');
        this.reset();
      }
    } catch (e) {
      console.log(e);
    }
  }
}

decorate(LoginStore, {
  login: observable,
  logar: action.bound,
});

export default new LoginStore();
