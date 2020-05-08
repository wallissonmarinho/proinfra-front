import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Form, Item, Input, Body, Text, CheckBox, Button, Header } from 'native-base';

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Header androidStatusBarColor="#0d83e0" style={styles.header} hasTabs />
        <View style={styles.container}>
          <View style={styles.top} />

          <View style={styles.middle}>
            <Text style={styles.textContainer}>ProInfra</Text>

            <View style={styles.formArea}>
              <Form style={styles.mainForm}>
                <Item style={styles.formItems}>
                  <Input placeholder="Seu email" style={styles.Input} />
                </Item>
                <Item style={styles.formItems}>
                  <Input placeholder="Senha" style={styles.Input} />
                </Item>

                <View style={styles.Button}>
                  <Button block style={styles.mainBtn} onPress={() => this.props.navigation.navigate('HomeTabs')}>
                    <Text style={styles.btnText}>Entrar</Text>
                  </Button>
                </View>
              </Form>
            </View>
          </View>
          <View style={styles.bottom}></View>
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
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 12.7,
    paddingLeft: 12.7,
  },
  textContainer: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    top: '20%',
    paddingBottom: 40,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontSize: 12,
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#0d83e0',
  },
  btnText: {
    color: '#fff',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
});

export default Login;