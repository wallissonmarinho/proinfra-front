import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Form, Item, Body, Text, Button, Header, Left, Title} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input} from '@ui-kitten/components';

class Esqueci extends Component {
  render() {
    const {loginStore, navigation} = this.props;
    return (
      <View style={styles.flex}>
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
            <View style={styles.borderRadius}>
              <Text style={styles.textContainer}>Nova senha</Text>

              <ScrollView style={styles.borderRadius}>
                <View style={styles.formArea}>
                  <Form style={styles.mainForm}>
                    <Item style={styles.formItems}>
                      <Input
                        placeholder="Seu email"
                        style={styles.Input}
                        value={loginStore.login.username}
                        onChangeText={(text) =>
                          loginStore.handleChangeEmail(text)
                        }
                      />
                    </Item>

                    <View style={styles.Button}>
                      <Button
                        block
                        style={styles.mainBtn}
                        onPress={() => {
                          loginStore.logar(navigation);
                        }}>
                        <Text style={styles.btnText}>Enviar</Text>
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
    marginTop: 50,
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
  flex: {
    flex: 1,
  },
  borderRadius: {
    borderRadius: 5,
  },
});

export default inject('loginStore')(observer(Esqueci));
