import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.20.0.1:3333',
  headers: {
    Authorization:
      'Bearer MQ.6-3URaBYYTn1GRdDhqgfZBxBOXiZ1zobmuordV3J9mhFKVL0thKtNTrfbOrT',
  },
});
