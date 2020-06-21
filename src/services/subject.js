import AsyncStorage from '@react-native-community/async-storage';

const Subject = {
  salvarSubject: async (subject) => {
    try {
      await AsyncStorage.setItem('@Token', subject.token);
      await AsyncStorage.setItem('@Usuario', JSON.stringify(subject.usuario));
    } catch (error) {
      console.log(error);
    }
  },
  obterSubject: async () => {
    try {
      const subject = {
        token: await AsyncStorage.getItem('@Token'),
        usuario: await AsyncStorage.getItem('@Usuario'),
      };
      return subject;
    } catch (error) {
      console.log(error);
    }
  },
  removerSubject: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  },
};

export default Subject;
