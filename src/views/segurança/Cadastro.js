/* eslint-disable no-alert */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Form, Body, Title, Text, Left, Button, Header} from 'native-base';
import {Input} from '@ui-kitten/components';

class Cadastro extends Component {
  state = {
    email: '',
    password: '',
    text: '',
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handlePassword = text => {
    this.setState({password: text});
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <Header androidStatusBarColor="#0d83e0" style={styles.header}>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('BemVindo')}>
              <MaterialCommunityIcons
                name="arrow-left-bold-box-outline"
                size={30}
                color={'#fff'}
              />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Cadastrar</Title>
          </Body>
        </Header>

        <View style={styles.container}>
          <View style={styles.top} />
          <View style={styles.middle}>
            <ScrollView>
              <View style={styles.formArea}>
                <Form>
                  <View style={styles.InputContainer}>
                    <Input style={styles.Input} placeholder="Nome Completo" />

                    <Input
                      style={styles.Input}
                      placeholder="CPF"
                      keyboardType="numeric"
                      maxLength={11}
                    />

                    <Input
                      style={styles.Input}
                      placeholder="Data de Nascimento"
                      keyboardType="numeric"
                    />

                    <Input
                      style={styles.Input}
                      placeholder="Telefone"
                      keyboardType="numeric"
                    />

                    <Input
                      style={styles.Input}
                      placeholder="Email"
                      onChangeText={this.handleEmail}
                    />

                    <Input
                      style={styles.Input}
                      placeholder="Senha"
                      onChangeText={this.handlePassword}
                    />
                  </View>

                  <View style={styles.Button}>
                    <Button
                      block
                      style={styles.mainBtn}
                      // onPress = {() => this.login(this.state.email, this.state.password)}
                      onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={styles.btnText}>Finalizar Cadastro</Text>
                    </Button>
                  </View>
                </Form>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196f3',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  top: {
    position: 'relative',
    backgroundColor: '#2196f3',
    paddingRight: 12.7,
    paddingLeft: 12.7,
    height: 250,
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    top: '5%',
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingBottom: 40,
    top: '5%',
  },
  Input: {
    marginBottom: 5,
  },
  InputContainer: {
    padding: 10,
  },
  Button: {
    padding: 30,
    marginTop: -25,
  },
  mainBtn: {
    backgroundColor: '#0d83e0',
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Cadastro;
