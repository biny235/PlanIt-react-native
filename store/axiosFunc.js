import axios from 'axios';
import { AsyncStorage } from 'react-native';
const production = 'http://fwiwh.herokuapp.com';
const local = 'http://localhost:3000';

const setHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  axios.defaults.headers.common.token = token ? token : '';
};

const call = async (type, link, body) => {
  console.log(body);
  if (!axios.defaults.headers.common.token) {
    await setHeader();
  }
  return axios[type](`${local}${link}`, body);
}

module.exports = call;
