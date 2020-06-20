import AsyncStorage from '@react-native-community/async-storage';

const Token = {
  salvarToken: async (token) => {
    try {
      await AsyncStorage.setItem('@Token', token);
    } catch (error) {
      console.log(error);
    }
  },
  obterToken: async () => {
    try {
      const token = await AsyncStorage.getItem('@Token');

      return token;
    } catch (error) {
      console.log(error);
    }
  },
  removerToken: async () => {
    try {
      await AsyncStorage.removeItem('@Token');
    } catch (error) {
      console.log(error);
    }
  },
};

export default Token;
