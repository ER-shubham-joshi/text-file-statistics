// src/components/__tests__/Stats.test.js
import { render, screen } from '@testing-library/react';
import Stats from '../components/Stats';

test('renders statistics correctly', () => {
    const mockStats = {
        words: 100,
        letters: 500,
        symbols: 10,
        topWords: ['word1', 'word2', 'word3'],
        topLetters: ['a', 'b', 'c'],
    };

    render(<Stats stats={mockStats} />);

    expect(screen.getByText(/Number of Words: 100/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of Letters: 500/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of Symbols: 10/i)).toBeInTheDocument();
    expect(screen.getByText(/Top Three Words: word1, word2, word3/i)).toBeInTheDocument();
    expect(screen.getByText(/Top Three Letters: a, b, c/i)).toBeInTheDocument();
});
