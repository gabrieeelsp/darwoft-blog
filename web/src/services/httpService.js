import axios from 'axios';
import { store } from '../app/store';

const httpService = axios.create({
    baseURL: 'http://localhost:8001/api/'
})

httpService.interceptors.request.use(
    (config) => {
        const { auth } = store.getState();
        if ( auth.accessToken ) config.headers.Authorization = auth.accessToken
        console.log(config)
        return config;
    },
    (error) => {
        return Promise.reject(error)
    })

export default httpService;
