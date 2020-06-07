/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Container, Body, Title, Button, Text} from 'native-base';
import {Input} from '@ui-kitten/components';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Perfil extends React.Component {
  state = {
    perfil: 0,
  };
  render() {
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
                    />
                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="01/01/2020"
                      name="data_nascimento"
                      keyboardType="numeric"
                    />

                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="(83) 9 2121-4343"
                      name="telefone"
                      keyboardType="numeric"
                    />

                    <Input
                      disabled
                      style={styles.Input}
                      placeholder="emailxpto@xpto.com"
                      name="email"
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
                  <View>
                    <Button
                      block
                      style={{
                        backgroundColor: 'red',
                        marginTop: 20,
                      }}>
                      <Text>Sair</Text>
                    </Button>
                  </View>
                </ScrollView>
              )}
              {this.state.perfil === 1 && (
                <ScrollView>
                  <View style={{padding: 20}}>
                    <Input
                      style={styles.Input}
                      placeholder="Fulano XPTO"
                      name="nomeCompleto"
                    />
                    <Input
                      style={styles.Input}
                      placeholder="01/01/2020"
                      name="data_nascimento"
                      keyboardType="numeric"
                    />

                    <Input
                      style={styles.Input}
                      placeholder="(83) 9 2121-4343"
                      name="telefone"
                      keyboardType="numeric"
                    />

                    <Input
                      style={styles.Input}
                      placeholder="emailxpto@xpto.com"
                      name="email"
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
                  <View>
                    <Button
                      block
                      style={{
                        backgroundColor: 'red',
                        marginTop: 20,
                      }}>
                      <Text>Sair</Text>
                    </Button>
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
                  <View>
                    <Button
                      block
                      style={{
                        backgroundColor: 'red',
                        marginTop: 20,
                      }}>
                      <Text>Sair</Text>
                    </Button>
                  </View>
                </ScrollView>
              )}
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

export default Perfil;
