import axios from 'axios';
import { store } from '../app/store';

const httpService = axios.create({
    baseURL: 'http://localhost:8001/api/'
})

httpService.interceptors.request.use(
    (config) => {
        const { auth } = store.getState();
        
        let token = auth.accessToken;
        if (!token) token = localStorage.getItem('accessToken');
        if ( token ) config.headers.Authorization = `Bearer ${token}`

        return config;
    },
    (error) => {
        return Promise.reject(error)
    })

export default httpService;
