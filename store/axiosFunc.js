import axios from 'axios';
import { AsyncStorage } from 'react-native';

const setHeader = async () => {
  const token = await AsyncStorage.getItem('userToken')
  axios.defaults.headers.common.token = token;
}

const call = async (type, link, body) => {
  console.log(type, link, body)
  await setHeader()
  return axios[type](link, body)
}

module.exports = call;
