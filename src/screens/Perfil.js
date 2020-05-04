import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions } from "@react-navigation/native";
import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";


const Perfil = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.menu}>
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
            <Text style={{ color: "#191919", fontSize: 16 }}>Perfil</Text>
          </View>
        </View>
      </View>
      <View style={styles.background}>
        <Icon name="face" color={"#191919"} size={100} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EBEBEB",
  },
  menu: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DFDFDF",
  },
});

export default Perfil;
