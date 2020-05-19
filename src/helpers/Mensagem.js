import {Alert, Platform} from 'react-native';

const error = (value, onPress) => {
  const msg = `${value}`;

  if (Platform.OS === 'ios') {
    setTimeout(
      () =>
        Alert.alert('Atenção!', msg, [{text: 'OK', onPress, style: 'cancel'}]),
      10,
    );
    return;
  }

  Alert.alert('Atenção!', msg, [{text: 'OK', onPress, style: 'cancel'}]);
};

const info = (value, onPress) => {
  const msg = `${value}`;

  if (Platform.OS === 'ios') {
    setTimeout(
      () =>
        Alert.alert('Informação!', msg, [
          {text: 'OK', onPress, style: 'cancel'},
        ]),
      10,
    );
    return;
  }

  Alert.alert('Informação!', msg, [{text: 'OK', onPress, style: 'cancel'}]);
};

export default {
  error,
  info,
};
