import axios from 'axios';
var API_KEY = 'FILL_THIS_IN';

const CONFIG = {
  headers: { 'Authorization': API_KEY },
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo'
};

// Exports an instance of the Axios object with presets
export default axios.create( CONFIG );