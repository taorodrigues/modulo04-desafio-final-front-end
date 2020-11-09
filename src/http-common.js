import axios from 'axios';
require('dotenv').config();

console.log(process.env.API_BASE_URL);

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://backend-gradesapi.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
