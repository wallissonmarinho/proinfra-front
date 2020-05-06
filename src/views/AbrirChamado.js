import * as React from 'react';
import {View, Text, Button} from 'react-native';

function AbrirChamado({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Abrir Chamado</Text>
      <Button
        title="Ocorrencias"
        onPress={() => navigation.navigate('Ocorrencias')}
      />
    </View>
  );
}

export default AbrirChamado;
