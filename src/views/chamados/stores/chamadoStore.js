import {decorate, observable, action} from 'mobx';
import {Alert, PermissionsAndroid} from 'react-native';
import {ChamadoService} from '../../../services';
import {mensagem} from '../../../helpers';
import Geolocation from 'react-native-geolocation-service';
import {Subject} from '../../../services';

class chamadoStore {
  subject = {
    token: null,
    usuario: {},
  };

  categorias = [];

  chamados = [
    {
      categoria: {
        cod_categoria: 0,
        categoria_nome: null,
        nome_imagem_categoria: null,
      },
      cliente: {
        cod_usuario: 0,
        nome: null,
      },
      cod_chamado: 0,
      descricaoChamado: null,
      latitude: null,
      longitude: null,
    },
  ];

  chamado = {
    categoria: {
      cod_categoria: 0,
      categoria_nome: null,
    },
    cliente: {
      cod_usuario: 0,
      nome: null,
    },
    cod_chamado: 0,
    descricaoChamado: null,
    latitude: null,
    longitude: null,
  };

  mapa = {
    latitude: null,
    longitude: null,
  };

  markers = [
    {
      title: '0',
      latitude: -7.1147119,
      longitude: -34.8492043,
    },
    {
      title: '1',
      latitude: -7.1156274,
      longitude: -34.8452883,
    },
    {
      title: '2',
      latitude: -7.1187574,
      longitude: -34.8406427,
    },
    {
      title: '3',
      latitude: -7.1218661,
      longitude: -34.8442476,
    },
  ];

  resetChamado() {
    this.chamado = {
      categoria: {
        cod_categoria: 0,
        categoria_nome: null,
      },
      cliente: {
        cod_usuario: 0,
        nome: null,
      },
      cod_chamado: 0,
      descricaoChamado: null,
      latitude: null,
      longitude: null,
    };
  }

  handleChangeChamado(name, value) {
    this.chamado[name] = value;
  }

  async localizacao() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissão de Localização',
          message: 'A aplicação precisa da permissão de localização.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (pos) => {
            this.mapa.latitude = pos.coords.latitude;
            this.mapa.longitude = pos.coords.longitude;
          },
          (error) => {
            console.log(error);
            Alert.alert('Houve um erro ao pegar a latitude e longitude.');
          },
        );
      } else {
        Alert.alert('Permissão de localização não concedida');
      }
    } catch (err) {
      console.log(err);
    }
  }

  defaultLocalizacao() {
    Geolocation.watchPosition(
      (pos) => {
        this.mapa.latitude = pos.coords.latitude;
        this.mapa.longitude = pos.coords.longitude;
      },
      (error) => {
        console.log(error);
        Alert.alert('Houve um erro ao pegar a latitude e longitude.');
      },
    );
  }

  obterCodigoCategoriaSelecionada(cod) {
    this.chamado.categoria.cod_categoria = cod;
  }

  async obterListaCategorias() {
    try {
      const result = await ChamadoService.listarCategoriasAtivas();

      if (result.status !== 200) {
        mensagem.error('Erro ao obter a lista de categorias!');
      }

      if (result.status === 200) {
        this.categorias = result.data;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async criarNovoChamado() {
    try {
      this.subject = await Subject.obterSubject();

      const usuario = JSON.parse(this.subject.usuario);

      const novoChamado = {
        cliente: {
          cod_usuario: usuario.cod_usuario,
        },
        categoria: {
          cod_categoria: this.chamado.categoria.cod_categoria,
        },
        descricaoChamado: this.chamado.descricaoChamado,
        latitude: this.mapa.latitude,
        longitude: this.mapa.longitude,
      };

      const result = await ChamadoService.criarChamado(
        novoChamado,
        this.subject.token,
      );

      if (result.status !== 201) {
        mensagem.error('Erro ao cadastrar chamado!');
      }

      if (result.status === 201) {
        mensagem.info('Chamado cadastrado com sucesso!');
        this.obterChamadosUsuario();
        this.resetChamado();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async obterChamadosUsuario() {
    try {
      this.subject = await Subject.obterSubject();

      const result = await ChamadoService.listarChamadosUsuario(
        this.subject.token,
      );

      if (result.status !== 200) {
        mensagem.error('Erro ao obter lista de chamados');
      }

      if (result.status === 200) {
        this.chamados = result.data.content;
        this.markers = result.data.content;
      }
    } catch (e) {
      console.log(e);
    }
  }
}

decorate(chamadoStore, {
  subject: observable,
  categorias: observable,
  chamados: observable,
  chamado: observable,
  mapa: observable,
  markers: observable,
  resetChamado: action.bound,
  localizacao: action.bound,
  defaultLocalizacao: action.bound,
  obterListaCategorias: action.bound,
  criarNovoChamado: action.bound,
  obterCodigoCategoriaSelecionada: action.bound,
  obterChamadosUsuario: action.bound,
});

export default new chamadoStore();
