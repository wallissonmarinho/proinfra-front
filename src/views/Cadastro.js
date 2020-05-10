import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Form,
  Item,
  Body,
  Title,
  Text,
  CheckBox,
  Left,
  Button,
  Header,
} from 'native-base';
import {Input, Layout} from '@ui-kitten/components';

class Cadastro extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}}>
        <Header androidStatusBarColor="#0d83e0" style={styles.header} hasTabs>
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
                    size="small"
                    placeholder="Nome Completo"
                  />

                  <Input style={styles.Input} size="small" placeholder="CPF" />

                  <Input
                    style={styles.Input}
                    size="small"
                    placeholder="Data de Nascimento"
                  />

                  <Input
                    style={styles.Input}
                    size="small"
                    placeholder="Telefone"
                  />

                  <Input
                    style={styles.Input}
                    size="small"
                    placeholder="Email"
                  />

                  <Input
                    style={styles.Input}
                    size="small"
                    placeholder="Senha"
                  />
                </View>

                <View style={styles.Button}>
                  <Button
                    block
                    style={styles.mainBtn}
                    onPress={() => this.props.navigation.navigate('Login')}>
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
    top: '4%',
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
    top: '4%',
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

export default Cadastro;
