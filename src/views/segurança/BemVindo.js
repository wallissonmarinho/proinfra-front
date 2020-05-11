import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Text, Container} from 'native-base';
import {Button} from '@ui-kitten/components';
import backgroundImage from '../../assets/wallpaper.jpg';

class Login extends Component {
  render() {
    return (
      <Container>
        <ImageBackground
          blurRadius={1}
          resizeMode="cover"
          style={styles.picture}
          source={backgroundImage}>
          <View style={styles.middle}>
            <Text style={styles.textContainer}>ProInfra</Text>

            <Text style={styles.textContainer}>
              Descrição slogan do serviço de infra strutura
            </Text>

            <View style={styles.formArea}>
              <View style={styles.Button}>
                <Button
                  block
                  style={styles.mainBtn}
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.btnText}>Entrar</Text>
                </Button>
              </View>
              <View style={styles.Button}>
                <Button
                  appearance="outline"
                  status="control"
                  onPress={() => this.props.navigation.navigate('Cadastro')}>
                  Não Tenho Cadastro
                </Button>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
  textContainer: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '35%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 5,
    top: '50%',
    paddingBottom: 40,
  },
  Button: {
    margin: 2,
    color: '#0d83e0',
    textDecorationColor: '#fff',
  },
  mainBtn: {
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  btnText: {
    color: '#0d83e0',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
});

export default Login;
