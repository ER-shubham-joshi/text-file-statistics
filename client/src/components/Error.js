// src/components/Error.js
import React from 'react';
import '../styles/Error.css';

const Error = ({ message }) => {
    return (
        <p className="error" data-testid="error">{message}</p>
    );
};

export default Error;
