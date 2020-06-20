/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {inject, observer} from 'mobx-react';
import PropTypes from 'prop-types';

import {
  Alert,
  StyleSheet,
  Modal,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {Header, Container, Body, Title, Left} from 'native-base';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input} from '@ui-kitten/components';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class AbrirChamado extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    categoriaStore: PropTypes.object,
  };

  state = {
    modalVisible: false,
  };

  componentDidMount() {
    this.props.categoriaStore.localizacao();
  }

  handleOpen = () => this.setState({modalVisible: true});

  handleClose = () => this.setState({modalVisible: false});

  render() {
    const {categoriaStore} = this.props;
    const {id} = this.props.route.params;

    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Left>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Categorias')}>
                <MaterialIcons
                  name="arrow-left-bold-box-outline"
                  size={30}
                  color={'#fff'}
                />
              </TouchableOpacity>
            </Left>
            <Body>
              <Title>Abrir Chamado</Title>
            </Body>
          </Header>
          <View style={{flex: 1}}>
            <View style={{marginRight: 10, marginTop: 10}}>
              <TouchableOpacity
                onPress={() => categoriaStore.localizacao()}
                style={styles.buttonLocalizacao}>
                <Icon name="my-location" color={'#fff'} size={30} />
              </TouchableOpacity>
            </View>
            <MapView
              style={{flex: 1, marginTop: -10}}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              region={{
                latitude: categoriaStore.mapa.latitude || -7.1183954,
                longitude: categoriaStore.mapa.longitude || -34.8482065,
                latitudeDelta: 0.015,
                longitudeDelta: 0.015,
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
                    <View
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: 200,
                        paddingBottom: 20,
                      }}>
                      {id === 1 && <Text>Água / Esgoto!</Text>}
                      {id === 2 && <Text>Energia!</Text>}
                      {id === 3 && <Text>Obstrução!</Text>}
                      {id === 4 && <Text>Vias!</Text>}
                      <TouchableOpacity onPress={this.handleClose}>
                        <MaterialIcons
                          name="close-box-outline"
                          size={30}
                          color={'red'}
                        />
                      </TouchableOpacity>
                    </View>
                    <Input
                      style={{paddingBottom: 20, width: '100%'}}
                      multiline={true}
                      textStyle={{minHeight: 64}}
                      placeholder="Descreva..."
                    />
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#2196f3',
                        width: 200,
                        height: 50,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{color: '#FFFF', fontSize: 16}}>Salvar</Text>
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

export default inject('categoriaStore')(observer(AbrirChamado));
