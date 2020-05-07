import * as React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  View,
  Thumbnail,
  Text,
} from 'native-base';
import {Button, StyleSheet} from 'react-native';

function AbrirChamado({navigation}) {
  return (
    <Container>
      <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
        {/* <Left>
          <Thumbnail small source={{uri: logo_url}} />
        </Left> */}
        <Body>
          <Title>Abrir Chamado</Title>
        </Body>
      </Header>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Abrir Chamado</Text>
        <Button
          title="Ocorrencias"
          onPress={() => navigation.navigate('Ocorrencias')}
        />
      </View>
    </Container>
  );
}

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7159C1',
  },
  container: {
    flex: 1,
  },
});

export default AbrirChamado;
