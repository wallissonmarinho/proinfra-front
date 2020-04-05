import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/native";

const Perfil = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity
          style={{ alignSelf: "center", paddingLeft: 20 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <View>
            <Icon name="menu" color={"#191919"} size={30} />
          </View>
        </TouchableOpacity>
        <View style={{ alignSelf: "center", paddingRight: 20 }}>
          <View>
            <Text style={{ color: "#191919", fontSize: 16 }}>Pro Infra</Text>
          </View>
        </View>
      </View>
      <Text>Tela de Perfil</Text>
    </View>
  );
};

export default Perfil;
