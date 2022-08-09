import axios from 'axios';

function api(){
    axios.create({
        baseURL: 'https://kenziehub.herokuapp.com',
        timeout: 5000,
    });
}
export default api;