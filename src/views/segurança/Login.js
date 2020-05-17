import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Form,
  Item,
  Body,
  Text,
  CheckBox,
  Button,
  Header,
  Left,
  Title,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from '@ui-kitten/components';

class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
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
            <Title />
          </Body>
        </Header>
        <View style={styles.container}>
          <View style={styles.top} />

          <View style={styles.middle}>
          <View style={{borderRadius: 5}}>
            <Text style={styles.textContainer}>ProInfra</Text>
            
            <ScrollView style={{borderRadius: 5}}>

            <View style={styles.formArea}>
              <Form style={styles.mainForm}>
                <Item style={styles.formItems}>
                  <Input placeholder="Seu email" style={styles.Input} />
                </Item>

                <Item style={styles.formItems}>
                  <Input placeholder="Senha" style={styles.Input} />
                </Item>

                <View style={styles.Button}>
                  <Button
                    block
                    style={styles.mainBtn}
                    onPress={() => this.props.navigation.navigate('HomeTabs')}>
                    <Text style={styles.btnText}>Entrar</Text>
                  </Button>
                </View>
              </Form>
            </View>
            </ScrollView>
            </View>
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
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
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
    paddingBottom: 100,
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: 'transparent',
  },
  Input: {
    flex: 1,
    paddingRight: 10,
  },
  Button: {
    padding: 30,
  },
  mainBtn: {
    backgroundColor: '#0d83e0',
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'GoogleSans-Medium',
    fontSize: 12,
  },
});

export default Login;
