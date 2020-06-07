/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Container, Body, Title, Button, Text} from 'native-base';
import {Input} from '@ui-kitten/components';

class Perfil extends React.Component {
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
                <View
                  style={{
                    width: 140,
                    height: 140,
                    backgroundColor: 'red',
                    borderRadius: 100,
                  }}
                />
              </View>
            </View>
            <View style={{flex: 0.8}}>
              <View style={{padding: 20, paddingTop: 80}}>
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
                    style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                    <Text>Editar dados</Text>
                  </Button>
                  <Button
                    block
                    style={{backgroundColor: '#0d83e0', borderRadius: 4}}>
                    <Text>Alterar Senha</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View>
              <Button block style={{backgroundColor: 'red', marginBottom: 50}}>
                <Text>Sair</Text>
              </Button>
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
