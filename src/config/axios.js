import axios from 'axios';

const odontologoAxios = axios.create({
    baseURL : 'https://backend-gestor-citas.herokuapp.com'
});

export default odontologoAxios;
