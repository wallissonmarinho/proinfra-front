import React from 'react';
import { inject, observer } from 'mobx-react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {Header, Container, Body, Title} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Categorias extends React.Component {

  render() {
    const { categoriaStore } = this.props;

    return (
      <Container>
        <View style={{flex: 1}}>
          <Header androidStatusBarColor="#0d83e0" style={styles.header}>
            <Body>
              <Title>Categorias</Title>
            </Body>
          </Header>
          <View style={{flex: 1, padding: 20}}>
            <FlatList
            data={categoriaStore.categorias}
            renderItem={( {item, index}) => 
            <TouchableOpacity>
              <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'green', marginBottom: 5, borderRadius: 5}}>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                  <MaterialIcons
                    name={item.icone}
                    size={70}
                    color={'red'}
                  />
                </View>
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                  <Text>
                    {item.nome}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            } />
          </View>
    
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

export default inject('categoriaStore')(observer(Categorias));
