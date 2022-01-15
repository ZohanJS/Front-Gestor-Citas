import axios from 'axios';

const odontologoAxios = axios.create({
    baseURL : 'http://192.168.0.7:4001'
});

export default odontologoAxios;
