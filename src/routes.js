import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';

import AbrirChamado from './views/AbrirChamado';
import BemVindo from './views/BemVindo';
import Cadastro from './views/Cadastro';
import Categorias from './views/Categorias';
import ChamadosAbertos from './views/ChamadosAbertos';
import Login from './views/Login';
import Ocorrencias from './views/Ocorrencias';
import Perfil from './views/Perfil';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => <Icon name="access-point" size={25} />,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Bem Vindo"
          component={BemVindo}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Abrir Chamado" component={AbrirChamado} />
        <Stack.Screen name="Chamados Abertos" component={ChamadosAbertos} />
        <Stack.Screen name="Categorias" component={Categorias} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Ocorrencias" component={Ocorrencias} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
