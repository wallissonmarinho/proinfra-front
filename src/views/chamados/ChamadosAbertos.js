import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ChamadosAbertos extends React.Component {
  static propTypes = {
    chamadoStore: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.chamadoStore.localizacao();
  }

  render() {
    const {chamadoStore} = this.props;

    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Chamados Abertos</Title>
            </Body>
          </Header>
          <View style={{flex: 1}}>
            <View style={{marginRight: 10, marginTop: 10}}>
              <TouchableOpacity
                onPress={() => {
                  chamadoStore.localizacao();
                }}
                style={styles.buttonLocalizacao}>
                <Icon name="my-location" color={'#fff'} size={30} />
              </TouchableOpacity>
            </View>
            <MapView
              style={{flex: 1, marginTop: -10}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              region={{
                latitude: chamadoStore.mapa.latitude || -7.1183954,
                longitude: chamadoStore.mapa.longitude || -34.8482065,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
              }}>
              <Markers chamadoStore={chamadoStore} />
            </MapView>
          </View>
        </View>
      </Container>
    );
  }
}

const Markers = ({chamadoStore}) =>
  chamadoStore.markers.map((marker, index) => (
    <View key={index}>
      {marker.title === '0' && (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={'Agua / Esgoto'}
          icon={require('../../assets/water-pump.png')}
        />
      )}
      {marker.title === '1' && (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={'Energia'}
          icon={require('../../assets/flash.png')}
        />
      )}
      {marker.title === '2' && (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={'Obstrução'}
          icon={require('../../assets/sign-caution.png')}
        />
      )}
      {marker.title === '3' && (
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={'Vias'}
          icon={require('../../assets/road.png')}
        />
      )}
    </View>
  ));

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196f3',
  },
  container: {
    flex: 1,
  },
  buttonLocalizacao: {
    backgroundColor: '#e74c3c',
    borderRadius: 150,
    marginBottom: -50,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    zIndex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  map: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default inject('chamadoStore')(observer(ChamadosAbertos));
