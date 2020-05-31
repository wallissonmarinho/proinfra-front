import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {StyleSheet, View} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

class ChamadosAbertos extends React.Component {
  static propTypes = {
    detalharStore: PropTypes.object.isRequired,
  };
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
            <MapView
              style={{flex: 1}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              {detalharStore.markers.map((marker) => (
                <MapView.Marker
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
