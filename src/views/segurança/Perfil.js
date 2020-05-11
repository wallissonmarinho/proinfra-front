import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  render() {
    const {count} = this.state;
    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Perfil</Title>
            </Body>
          </Header>
          <View style={styles.countContainer}>
            <Text>Count: {count}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('BemVindo')}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196f3',
  },
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Perfil;
