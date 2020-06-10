/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AbrirChamado extends React.Component {
  state = {
    modalVisible: false,
  };

  handleOpen = () => this.setState({modalVisible: true});

  handleClose = () => this.setState({modalVisible: false});

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
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={this.handleOpen}
                style={{
                  backgroundColor: '#2196f3',
                  zIndex: 1,
                  marginTop: -80,
                  width: 200,
                  height: 50,
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#FFFF', fontSize: 16}}>Abri Chamado</Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <TouchableOpacity
                      onPress={this.handleClose}
                      style={{
                        backgroundColor: '#2196f3',
                        width: 200,
                        height: 50,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#FFFF', fontSize: 16}}>Fechar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
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
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AbrirChamado;
