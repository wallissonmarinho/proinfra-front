import React, { useState } from "react";
import { DrawerActions } from "@react-navigation/native";
import {
  PermissionsAndroid,
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
  const [position, setPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Permissão de Localização",
          message: "A aplicação precisa da permissão de localização.",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (pos) => {
            setPosition({
              ...position,
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          },
          (error) => {
            console.log(error);
            Alert.alert("Houve um erro ao pegar a latitude e longitude.");
          }
        );
      } else {
        Alert.alert("Permissão de localização não concedida");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
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
      <MapView
        style={styles.map}
        region={position}
        onPress={(e) =>
          setPosition({
            ...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          })
        }
      >
        <Marker coordinate={position} title={"Sua Localização"} />
      </MapView>
      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => {
          request_location_runtime_permission();
        }}
      >
        <Icon name="map-search" color={"#fff"} size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginBottom: 10,
  },
  locationButton: {
    backgroundColor: "#191919",
    borderRadius: 150,
    marginTop: -35,
    marginBottom: 20,
    marginRight: 20,
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 8,
  },
});

export default Home;
