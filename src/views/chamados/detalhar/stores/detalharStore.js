import {decorate, observable, action} from 'mobx';
import {Alert, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class detalharStore {
  categorias = [
    {
      id: 1,
      tipo: 'Água / Esgoto',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'water-pump',
    },
    {
      id: 3,
      tipo: 'Energia',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'flash',
    },
    {
      id: 4,
      tipo: 'Obstrução',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'sign-caution',
    },

    {
      id: 5,
      tipo: 'Vias',
      data: '11/03/2020',
      status: 'Em Analise',
      icone: 'road',
    },
    {
      id: 6,
      tipo: 'Energia',
      data: '11/03/2020',
      status: 'Concluido',
      icone: 'flash',
    },
  ];

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

decorate(detalharStore, {
  categorias: observable,
  markers: observable,
  mapa: observable,
  localizacao: action.bound,
});

export default new detalharStore();
