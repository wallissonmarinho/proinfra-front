/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Header, Container, Body, Title, Button, Text} from 'native-base';
import {Input} from '@ui-kitten/components';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    perfil: 0,
  };

  render() {
    const {loginStore, navigation} = this.props;

    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Perfil</Title>
            </Body>
          </Header>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 0.2,
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#0d83e0',
              }}>
              <View
                style={{
                  marginTop: 100,
                  backgroundColor: '#FFFF',
                  width: 150,
                  height: 150,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 100,
                }}>
                <MaterialIcons color="#0d83e0" name="account-edit" size={140} />
              </View>
            </View>
            <View style={{flex: 0.8, marginTop: 100}}>
              {this.state.perfil === 0 && (
                <ScrollView>
                  <View style={{padding: 20}}>
                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="Fulano XPTO"
                      name="nomeCompleto"
                      value={loginStore.usuario.nome}
                    />
                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="01/01/2020"
                      name="data_nascimento"
                      keyboardType="numeric"
                      value={loginStore.usuario.data_nascimento}
                    />
                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="(83) 9 2121-4343"
                      name="telefone"
                      keyboardType="numeric"
                      value={loginStore.usuario.telefone}
                    />

                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="emailxpto@xpto.com"
                      name="email"
                      value={loginStore.usuario.email}
                    />
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Button
                        block
                        onPress={() => this.setState({perfil: 1})}
                        style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                        <Text>Editar dados</Text>
                      </Button>
                      <Button
                        block
                        onPress={() => this.setState({perfil: 2})}
                        style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                        <Text>Alterar Senha</Text>
                      </Button>
                    </View>
                  </View>
                </ScrollView>
              )}
              {this.state.perfil === 1 && (
                <ScrollView>
                  <View style={{padding: 20}}>
                    <Input
                      style={styles.Input}
                      placeholder="Fulano XPTO"
                      name="nome"
                      value={loginStore.usuario.nome}
                      onChangeText={(text) =>
                        loginStore.handleChangeUsuario('nome', text)
                      }
                    />
                    <Input
                      style={styles.Input}
                      placeholder="01/01/2020"
                      keyboardType="numeric"
                      name="data_nascimento"
                      value={loginStore.usuario.data_nascimento}
                      onChangeText={(text) =>
                        loginStore.handleChangeUsuario('data_nascimento', text)
                      }
                    />

                    <Input
                      style={styles.Input}
                      placeholder="(83) 9 2121-4343"
                      keyboardType="numeric"
                      name="telefone"
                      value={loginStore.usuario.telefone}
                      onChangeText={(text) =>
                        loginStore.handleChangeUsuario('telefone', text)
                      }
                    />

                    <Input
                      style={styles.Input}
                      placeholder="emailxpto@xpto.com"
                      name="email"
                      value={loginStore.usuario.email}
                      onChangeText={(text) =>
                        loginStore.handleChangeUsuario('email', text)
                      }
                    />
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Button
                        block
                        onPress={() => this.setState({perfil: 0})}
                        style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                        <Text>Cancelar</Text>
                      </Button>
                      <Button
                        block
                        style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                        <Text>Salvar</Text>
                      </Button>
                    </View>
                  </View>
                </ScrollView>
              )}
              {this.state.perfil === 2 && (
                <ScrollView>
                  <View style={{padding: 20}}>
                    <Input
                      style={styles.Input}
                      placeholder="Digite sua senha"
                      name="nomeCompleto"
                    />
                    <Input
                      style={styles.Input}
                      placeholder="Nova Senha"
                      name="data_nascimento"
                    />

                    <Input
                      style={styles.Input}
                      placeholder="Confirmar nova senha"
                      name="telefone"
                    />
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                      }}>
                      <Button
                        block
                        onPress={() => this.setState({perfil: 0})}
                        style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                        <Text>Cancelar</Text>
                      </Button>
                      <Button
                        block
                        style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                        <Text>Salvar</Text>
                      </Button>
                    </View>
                  </View>
                </ScrollView>
              )}
              <View>
                <Button
                  block
                  style={{
                    backgroundColor: 'red',
                    margin: 20,
                    borderRadius: 4,
                  }}
                  onPress={() => {
                    console.log('rodei');
                    loginStore.logout(navigation);
                  }}>
                  <Text>Sair</Text>
                </Button>
              </View>
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default inject('loginStore')(observer(Perfil));
