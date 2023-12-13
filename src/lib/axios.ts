import Axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '../config';
import storage from '../utils/storage';

function authRequestInterceptor(config: AxiosRequestConfig): any {
    
    const token = storage.getItem('token');
    config.headers = config.headers || {};

    if (token) {
        config.headers.Authorization = `${token}`;
    }
    
    config.headers.Accept = 'application/json';
    
    return config;
};

export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.request.use(
    (response: AxiosRequestConfig) => {
        return response.data;
    },
    (error: any) => {
    const message = error.response?.data?.message || error.message;
    // TODO: show error message using notifications
    return Promise.reject(error);
    }
);