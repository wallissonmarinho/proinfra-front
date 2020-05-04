import React, { useState } from "react";
import { DrawerActions } from "@react-navigation/native";
import {
  PermissionsAndroid,
  Alert,
  TouchableHighlight,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Modal from "react-native-modal";

import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [position, setPosition] = useState({
    latitude: -7.1588549,
    longitude: -34.8572636,
    latitudeDelta: 0.0054,
    longitudeDelta: 0.0054,
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
            <Text style={{ color: "#191919", fontSize: 16 }}>Pro Infra</Text>
          </View>
        </View>
      </View>

      <View style={styles.mapContainer}>
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
          style={styles.ationButton}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Icon name="bullhorn-outline" color={"#fff"} size={30} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.locationButton}
        onPress={() => {
          request_location_runtime_permission();
        }}
      >
        <Icon name="crosshairs-gps" color={"#2196F3"} size={25} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#DFDFDF",
  },
  map: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginBottom: 10,
  },
  mapContainer: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
    marginTop: 60,
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  locationButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 150,
    marginBottom: 15,
    marginRight: 15,
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 8,
  },
  ationButton: {
    backgroundColor: "#191919",
    borderRadius: 150,
    marginTop: -100,
    marginBottom: 100,
    marginRight: 15,
    width: 50,
    height: 50,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 8,
  },
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    margin: -500,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
