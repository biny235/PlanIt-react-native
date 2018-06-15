import axios from 'axios';
import { AsyncStorage } from 'react-native';
const production = 'http://fwiwh.herokuapp.com';
const local = 'http://172.16.27.23:3000';

const setHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  axios.defaults.headers.common.token = token ? token : '';
};

const call = async (type, link, body) => {
  await setHeader();
  return axios[type](`${production}${link}`, body);
};

module.exports = call;
