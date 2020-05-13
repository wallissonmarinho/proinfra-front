/* eslint-disable no-alert */
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Form, Body, Title, Text, Left, Button, Header} from 'native-base';
import {Input} from '@ui-kitten/components';

class Cadastro extends Component {
  state = {
    email: '',
    password: '',
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
    const {cadastroStore} = this.props;

    console.log(cadastroStore.cadastro);

    return (
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
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
            <View style={styles.formArea}>
              <Form>
                <View style={styles.InputContainer}>
                  <Input
                    style={styles.Input}
                    placeholder="Nome Completo"
                    name="nomeCompleto"
                    value={cadastroStore.cadastro.nomeCompleto}
                    onChangeText={text => cadastroStore.handleChangeNome(text)}
                  />

                  <Input
                    style={styles.Input}
                    placeholder="CPF"
                    name="cpf"
                    value={cadastroStore.cadastro.cpf}
                    onChangeText={text => cadastroStore.handleChangeCPF(text)}
                  />

                  <Input
                    style={styles.Input}
                    placeholder="Data de Nascimento"
                    name="data_nascimento"
                    value={cadastroStore.cadastro.data_nascimento}
                    onChangeText={text =>
                      cadastroStore.handleChangeDataNascimento(text)
                    }
                  />

                  <Input
                    style={styles.Input}
                    placeholder="Telefone"
                    name="telefone"
                    value={cadastroStore.cadastro.telefone}
                    onChangeText={text =>
                      cadastroStore.handleChangeTelefone(text)
                    }
                  />

                  <Input
                    style={styles.Input}
                    placeholder="Email"
                    name="email"
                    value={cadastroStore.cadastro.email}
                    onChangeText={text => cadastroStore.handleChangeEmail(text)}
                  />

                  <Input
                    style={styles.Input}
                    placeholder="Senha"
                    name="senha"
                    value={cadastroStore.cadastro.senha}
                    onChangeText={text => cadastroStore.handleChangeSenha(text)}
                  />
                </View>

                <View style={styles.Button}>
                  <Button
                    block
                    style={styles.mainBtn}
                    onPress={() => {
                      cadastroStore.cadastrar();
                      this.props.navigation.navigate('Login');
                    }}>
                    <Text style={styles.btnText}>Finalizar Cadastro</Text>
                  </Button>
                </View>
              </Form>
            </View>
          </View>

          <View style={styles.bottom} />
        </View>
      </KeyboardAvoidingView>
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
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12,
    paddingLeft: 12,
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingBottom: 40,
    top: '5%',
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: 'transparent',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default inject('cadastroStore')(observer(Cadastro));
