import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-d4dfa.firebaseio.com/'
});

export default instance;