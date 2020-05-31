import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AbrirChamado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Abrir Chamado</Title>
            </Body>
          </Header>
          <View style={{flex: 1}}>
            <View style={{marginRight: 10, marginTop: 10}}>
              <TouchableOpacity style={styles.buttonLocalizacao}>
                <Icon name="my-location" color={'#fff'} size={30} />
              </TouchableOpacity>
            </View>
            <MapView
              style={{flex: 1, marginTop: -10}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
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
});

export default AbrirChamado;
