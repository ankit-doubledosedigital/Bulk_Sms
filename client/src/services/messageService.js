import axios from 'axios';

const API_URL = '/api/messages';

const sendMessage = (phoneNumber, message) => {
  return axios.post(API_URL, { phoneNumber, message });
};

const getMessages = () => {
  return axios.get(API_URL);
};

export default {
  sendMessage,
  getMessages
};
