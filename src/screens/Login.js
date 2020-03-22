import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Keyboard
} from "react-native";

function Login() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }));

  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    KeyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 100
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logo}>
        <Animated.Image
          style={{ width: logo.x, height: logo.y }}
          source={require("./../assets/logo.png")}
        />
        <Text style={styles.logoText}>Pro Infra</Text>
      </View>

      <Animated.View
        style={[
          styles.login,
          {
            opacity: opacity,
            translateY: offset.y
          }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastro}>
          <Text style={styles.btnCadastroText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919"
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    paddingBottom: 50
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 16,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: "#35aaff",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7
  },
  btnSubmitText: {
    color: "#fff",
    fontSize: 18
  },
  btnCadastro: {
    marginTop: 10
  },
  btnCadastroText: {
    color: "#fff"
  }
});

export default Login;
