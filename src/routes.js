import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ drawerLabel: "Login" }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ drawerLabel: "Home" }}
        />
        <Drawer.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ drawerLabel: "Cadastro" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
