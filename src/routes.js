import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";
import Home from "./screens/Home";

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
