import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Ocorrencias({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Ocorrencias</Text>
      <Button
        title="Chamados Abertos"
        onPress={() => navigation.navigate('Chamados Abertos')}
      />
    </View>
  );
}

export default Ocorrencias;
