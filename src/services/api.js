import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-clone-dropbox.herokuapp.com'
});

export default api;