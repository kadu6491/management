// First we need to import axios.js
import axios from 'axios';
// Next we make an 'instance' of it
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


const instance = axios.create({
    baseURL: 'http://192.168.172.200/',
    // baseURL: 'http://localhost:5000/'
});

export default instance;