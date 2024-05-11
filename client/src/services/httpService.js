import axios from 'axios';
import { store } from '../app/store';

const httpService = axios.create({
    baseURL: `${import.meta.env.VITE_URL_API}/api/`
})

httpService.interceptors.request.use(
    (config) => {
        const { accessToken } = store.getState().auth;

        if (accessToken || localStorage.getItem('accessToken'))  
            config.headers.Authorization = `Bearer `.concat(accessToken || localStorage.getItem('accessToken'))

        return config;
    },
    (error) => {
        return Promise.reject(error)
    })

export default httpService;
