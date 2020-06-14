import {decorate, observable, action} from 'mobx';
import {Alert, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class categoriaStore {
  categorias = [
    {
      id: 1,
      nome: 'Água / Esgoto',
      icone: 'water-pump',
    },
    {
      id: 2,
      nome: 'Energia',
      icone: 'flash',
    },
    {
      id: 3,
      nome: 'Obstrução',
      icone: 'sign-caution',
    },

    {
      id: 4,
      nome: 'Vias',
      icone: 'road',
    },
  ];

  mapa = {
    latitude: null,
    longitude: null,
  };

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
});

export default new categoriaStore();
