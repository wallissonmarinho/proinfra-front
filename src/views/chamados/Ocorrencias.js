import React from 'react';
import PropTypes from 'prop-types';
import {inject, observer} from 'mobx-react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Ocorrencias extends React.Component {
  static propTypes = {
    chamadoStore: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const {chamadoStore} = this.props;
    chamadoStore.obterChamadosUsuario();
  }

  render() {
    const {chamadoStore} = this.props;

    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Ocorrencias</Title>
            </Body>
          </Header>
          {chamadoStore.chamados.length < 1 && (
            <Text
              style={{
                margin: 20,
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {' '}
              Nenhum chamado cadastrado!
            </Text>
          )}
          {chamadoStore.chamados.length > 0 && (
            <View style={{flex: 1, padding: 20}}>
              <FlatList
                data={chamadoStore.chamados}
                renderItem={({item, index}) => (
                  <View>
                    <View style={styles.viewTouch}>
                      <View style={styles.viewTouchIcon}>
                        <MaterialIcons
                          name={item.categoria.nome_imagem_categoria}
                          size={40}
                          color={'black'}
                        />
                      </View>
                      <View style={styles.viewTouchText}>
                        <Text style={{fontSize: 17}}>
                          Tipo de Chamado: {item.categoria.nome_categoria}
                        </Text>
                        <Text style={{fontSize: 17}}>
                          Data: {item.instante}
                        </Text>
                        <Text style={{fontSize: 17}}>
                          Status: {item.estado}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196f3',
  },
  viewTouch: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0, .2)',
    marginBottom: 15,
    borderRadius: 5,
  },
  viewTouchIcon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  viewTouchText: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default inject('chamadoStore')(observer(Ocorrencias));
