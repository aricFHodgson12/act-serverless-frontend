import axios from 'axios';
import config from '@/config';

const instance = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true
});

instance.interceptors.response.use(
    response => response,
    error => {
        const { responseURL } = error.response.request;
        const fromRoute = responseURL.split('/').pop();
        const nonRedirectUrls = ['login', 'register', 'forgot-password'];

        if (
            (!error.response || error.response.status === 401) &&
            !nonRedirectUrls.includes(fromRoute)
        ) {
            localStorage.clear();

            window.location.href = '/login';
        }

        throw error;
    }
);

export default instance;
