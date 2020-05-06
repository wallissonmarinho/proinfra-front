import * as React from 'react';
import {View, Text, Button} from 'react-native';

function ChamadosAbertos({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Chamados Abertos</Text>
      <Button title="Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}

export default ChamadosAbertos;
