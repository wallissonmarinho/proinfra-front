import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

class ChamadosAbertos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          title: 'hello',
          coordinates: {
            latitude: 37.78025,
            longitude: -122.4324,
          },
        },
        {
          title: 'hello',
          coordinates: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
        },
      ],
    };
  }

  render() {
    const {count} = this.state;
    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Chamados Abertos</Title>
            </Body>
          </Header>
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
            {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={marker.coordinates}
                title={marker.title}
              />
            ))}
          </MapView>
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

export default ChamadosAbertos;
