// src/components/__tests__/FileProcessor.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import FileProcessor from '../components/FileProcessor';
import useFileUpload from '../hooks/useFileUpload';

jest.mock('../hooks/useFileUpload');

describe('FileProcessor Component', () => {
    test('renders file upload button and selects a file', () => {
        useFileUpload.mockReturnValue({
            file: null,
            setFile: jest.fn(),
            stats: null,
            error: null,
            loading: false,
            handleFileChange: jest.fn(),
            handleUpload: jest.fn(),
        });

        render(<FileProcessor />);
        const uploadButton = screen.getByText(/Choose File/i);
        expect(uploadButton).toBeInTheDocument();

        const fileInput = screen.getByLabelText(/Choose File/i);
        fireEvent.change(fileInput, {
            target: { files: [new File(['example content'], 'example.txt', { type: 'text/plain' })] },
        });

        expect(useFileUpload().handleFileChange).toHaveBeenCalled();
    });

    test('displays error when invalid file type is selected', () => {
        useFileUpload.mockReturnValue({
            file: null,
            setFile: jest.fn(),
            stats: null,
            error: 'Only text files are allowed!',
            loading: false,
            handleFileChange: jest.fn(),
            handleUpload: jest.fn(),
        });

        render(<FileProcessor />);
        expect(screen.getByText(/Only text files are allowed!/i)).toBeInTheDocument();
    });

    test('shows loader during upload', () => {
        useFileUpload.mockReturnValue({
            file: { name: 'example.txt' },
            setFile: jest.fn(),
            stats: null,
            error: null,
            loading: true,
            handleFileChange: jest.fn(),
            handleUpload: jest.fn(),
        });

        render(<FileProcessor />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    test('displays statistics after successful upload', () => {
        useFileUpload.mockReturnValue({
            file: { name: 'example.txt' },
            setFile: jest.fn(),
            stats: {
                words: 100,
                letters: 500,
                symbols: 10,
                topWords: ['word1', 'word2', 'word3'],
                topLetters: ['a', 'b', 'c'],
            },
            error: null,
            loading: false,
            handleFileChange: jest.fn(),
            handleUpload: jest.fn(),
        });

        render(<FileProcessor />);
        expect(screen.getByText(/Number of Words: 100/i)).toBeInTheDocument();
    });
});
