// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/upload';

export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
