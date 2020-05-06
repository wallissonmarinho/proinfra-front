import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Categorias({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Categorias</Text>
      <Button
        title="Abrir Chamado"
        onPress={() => navigation.navigate('Abrir Chamado')}
      />
    </View>
  );
}

export default Categorias;
