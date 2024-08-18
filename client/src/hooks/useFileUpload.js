// src/hooks/useFileUpload.js
import { useState } from 'react';
import { uploadFile } from '../services/api';

const useFileUpload = () => {
    const [file, setFile] = useState(null);
    const [stats, setStats] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile.type !== 'text/plain') {
                setError('Only text files are allowed!');
                setFile(null);
                e.target.value = '';
                return;
            }
            if (selectedFile.size > 1 * 1024 * 1024) { // 1 MB limit
                setError('File size exceeds 1 MB.');
                setFile(null);
                e.target.value = '';
                return;
            }
            setFile(selectedFile);
            setError(null);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please select a file first.');
            return;
        }

        setLoading(true);

        try {
            const response = await uploadFile(file);
            setStats(response.data);
            setError(null);
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data);
            } else {
                setError('Error uploading file. Please try again.');
            }
            setStats(null);
        } finally {
            setLoading(false);
        }
    };

    return { file, setFile, stats, error, loading, handleFileChange, handleUpload };
};

export default useFileUpload;
