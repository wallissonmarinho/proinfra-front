import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

import 'react-native-gesture-handler';

import AbrirChamado from '../views/chamados/solicitar/AbrirChamado';
import Categorias from '../views/chamados/solicitar/Categorias';

import ChamadosAbertos from '../views/chamados/detalhar/ChamadosAbertos';
import Ocorrencias from '../views/chamados/detalhar/Ocorrencias';

import Perfil from '../views/segurança/Perfil';
import BemVindo from '../views/segurança/BemVindo';
import Cadastro from '../views/segurança/Cadastro';
import Login from '../views/segurança/Login';

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
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{backgroundColor: '#0d83e0'}}>
      <Tab.Screen
        name="Categorias"
        component={CategoriaStack}
        options={{
          tabBarLabel: 'Categorias',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ChamadosAbertos"
        component={ChamadosAbertos}
        options={{
          tabBarLabel: 'Efetuados',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="alert-box-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Ocorrencias"
        component={Ocorrencias}
        options={{
          tabBarLabel: 'Ocorrencias',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="calendar-check-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-box-outline"
              color={color}
              size={26}
            />
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
