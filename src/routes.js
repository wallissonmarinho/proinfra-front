import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import 'react-native-gesture-handler';

import AbrirChamado from './views/AbrirChamado';
import BemVindo from './views/BemVindo';
import Cadastro from './views/Cadastro';
import Categorias from './views/Categorias';
import ChamadosAbertos from './views/ChamadosAbertos';
import Login from './views/Login';
import Ocorrencias from './views/Ocorrencias';
import Perfil from './views/Perfil';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function CategoriaStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Categorias"
        component={Categorias}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AbrirChamado"
        component={AbrirChamado}
      />
    </Stack.Navigator>
  );
}

function HomeTabs({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Categorias"
        component={CategoriaStack}
        options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ChamadosAbertos"
        component={ChamadosAbertos}
        options={{
          tabBarLabel: 'ChamadosAbertos',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ocorrencias"
        component={Ocorrencias}
        options={{
          tabBarLabel: 'Ocorrencias',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="BemVindo"
        component={BemVindo}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Cadastro"
        component={Cadastro}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeTabs"
        component={HomeTabs}
      />
    </Stack.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

export default Routes;
