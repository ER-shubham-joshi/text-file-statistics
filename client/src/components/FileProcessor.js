// src/components/FileProcessor.js
import React from 'react';
import { FaFileUpload } from 'react-icons/fa';
import Loader from './Loader';
import Stats from './Stats';
import Error from './Error';
import useFileUpload from '../hooks/useFileUpload';
import '../styles/FileProcessor.css';

const FileProcessor = () => {
    const { file, stats, error, loading, handleFileChange, handleUpload } = useFileUpload();

    return (
        <div className="file-upload-container">
            <div className="file-input-wrapper">
                <label className="custom-file-upload">
                    <FaFileUpload className="file-icon" />
                    Choose File
                    <input type="file" data-testid="file-input" onChange={handleFileChange} />
                </label>
            </div>
            {file && (
                <div className="file-name" data-testid="file-name">
                    <p>Selected File: {file.name}</p>
                </div>
            )}
            <button disabled={error || loading} className="custom-file-upload upload-button" onClick={handleUpload}>
                Upload
            </button>
            {loading && <Loader />}
            {error && <Error message={error} />}
            {stats && !error && !loading && (
                <Stats stats={stats} />
            )}
        </div>
    );
};

export default FileProcessor;
