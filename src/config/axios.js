import axios from 'axios';

const odontologoAxios = axios.create({
    baseURL : 'http://localhost:4001'
});

export default odontologoAxios;