import * as React from 'react';
import {View, Text, Button} from 'react-native';

function BemVindo({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Bem Vindo</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}

export default BemVindo;
