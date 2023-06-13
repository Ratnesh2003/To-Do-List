import axios from "axios";
// import { Navigate } from "react-router-dom";

// const navigate = Navigate();

const axiosAuthInstance = axios.create();

axiosAuthInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } 
        return config;
    }, 
    error => {
        return Promise.reject(error);
    }
);

export default axiosAuthInstance;