import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Cadastro({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cadastro</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default Cadastro;
