import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button
        title="Categorias"
        onPress={() => navigation.navigate('Categorias')}
      />
    </View>
  );
}

export default Login;
