import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Perfil({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Perfil</Text>
      <Button title="Sair" onPress={() => navigation.navigate('BemVindo')} />
    </View>
  );
}

export default Perfil;
