import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ChamadosAbertos extends React.Component {
  static propTypes = {
    detalharStore: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.detalharStore.localizacao();
  }

  render() {
    const {detalharStore} = this.props;

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
                onPress={() => detalharStore.localizacao()}
                style={styles.buttonLocalizacao}>
                <Icon name="my-location" color={'#fff'} size={30} />
              </TouchableOpacity>
            </View>
            <MapView
              style={{flex: 1, marginTop: -10}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              region={{
                latitude: detalharStore.mapa.latitude || -7.1183954,
                longitude: detalharStore.mapa.longitude || -34.8482065,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
              }}>
              {detalharStore.markers.map((marker, index) => (
                <MapView.Marker
                  key={index}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                  }}
                  title={marker.title}
                />
              ))}
            </MapView>
          </View>
        </View>
      </Container>
    );
  }
}

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

export default inject('detalharStore')(observer(ChamadosAbertos));
