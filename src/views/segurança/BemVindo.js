import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Text, Container} from 'native-base';
import {Button} from '@ui-kitten/components';
import backgroundImage from '../../assets/wallpaper.jpg';
import baImage from '../../assets/Logo_ProInfra.png';

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
            <Image style={styles.logo} source={baImage} />

            <Text style={styles.textContainer}>
              Quer relatar algum problema? Temos a solução
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
    fontSize: 22,
    position: 'relative',
    top: '5%',
    alignSelf: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    position: 'relative',
    top: '5%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 5,
    top: '20%',
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
