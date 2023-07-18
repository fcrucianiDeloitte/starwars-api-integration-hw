import axios from "axios";

const destination = '/api';

const http = axios.create({
  baseURL: destination,
  headers: {
    'Content-type': 'application/json'
  },
});

export { http };
