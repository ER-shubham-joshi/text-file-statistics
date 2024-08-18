// src/hooks/__tests__/useFileUpload.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FileProcessor from '../components/FileProcessor';
import { uploadFile } from '../services/api';

jest.mock('../services/api', () => ({
    uploadFile: jest.fn(),
}));

describe('FileProcessor Component', () => {
    test('handles file selection', () => {
        render(<FileProcessor />);

        const file = new File(['example content'], 'example.txt', { type: 'text/plain' });
        const fileInput = screen.getByTestId('file-input');

        fireEvent.change(fileInput, { target: { files: [file] } });

        expect(screen.getByTestId('file-name')).toHaveTextContent('example.txt');
    });

    test('displays error for unsupported file type', () => {
        render(<FileProcessor />);

        const file = new File(['image content'], 'image.png', { type: 'image/png' });
        const fileInput = screen.getByTestId('file-input');

        fireEvent.change(fileInput, { target: { files: [file] } });

        expect(screen.getByTestId('error')).toHaveTextContent('Only text files are allowed!');
    });

    test('uploads file and displays stats on success', async () => {
        const mockStats = {
            words: 100,
            letters: 500,
            symbols: 10,
            topWords: ['word1', 'word2', 'word3'],
            topLetters: ['a', 'b', 'c'],
        };

        uploadFile.mockResolvedValue({ data: mockStats });

        render(<FileProcessor />);

        const file = new File(['example content'], 'example.txt', { type: 'text/plain' });
        const fileInput = screen.getByTestId('file-input');
        const uploadButton = screen.getByText(/Upload/i);

        fireEvent.change(fileInput, { target: { files: [file] } });
        fireEvent.click(uploadButton);

        const statsElement = await screen.findByTestId('stats');

        expect(statsElement).toBeInTheDocument();
        expect(screen.getByText(/Number of Words: 100/i)).toBeInTheDocument();
        expect(screen.getByText(/Number of Letters: 500/i)).toBeInTheDocument();
    });

    test('displays error on failed upload', async () => {
        uploadFile.mockRejectedValue({ response: { data: 'Error uploading file.' } });

        render(<FileProcessor />);

        const file = new File(['example content'], 'example.txt', { type: 'text/plain' });
        const fileInput = screen.getByTestId('file-input');
        const uploadButton = screen.getByText(/Upload/i);

        fireEvent.change(fileInput, { target: { files: [file] } });
        fireEvent.click(uploadButton);

        const errorElement = await screen.findByTestId('error');

        expect(errorElement).toHaveTextContent('Error uploading file.');
    });
});
