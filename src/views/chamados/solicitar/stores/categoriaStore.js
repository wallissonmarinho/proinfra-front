import {decorate, observable, action} from 'mobx';
import {Alert, PermissionsAndroid} from 'react-native';
import {ChamadoService} from '../../../../services';
import {mensagem} from '../../../../helpers';
import Geolocation from 'react-native-geolocation-service';

class categoriaStore {
  categorias = [];

  mapa = {
    latitude: null,
    longitude: null,
  };

  async obterListaCategorias() {
    try {
      const result = await ChamadoService.listarCategoriasAtivas();

      if (result.status !== 200) {
        mensagem.info('Erro ao obter a lista de categorias!');
      }

      if (result.status === 200) {
        this.categorias = result.data;
      }
    } catch (e) {
      console.log(e);
    }
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
}

decorate(categoriaStore, {
  categorias: observable,
  mapa: observable,
  localizacao: action.bound,
  obterListaCategorias: action.bound,
});

export default new categoriaStore();
