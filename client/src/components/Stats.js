// src/components/Stats.js
import React from 'react';
import '../styles/Stats.css';

const Stats = ({ stats }) => {
    return (
        <div className="stats" data-testid="stats">
            <p>Number of Words: {stats.words}</p>
            <p>Number of Letters: {stats.letters}</p>
            <p>Number of Symbols: {stats.symbols}</p>
            <p>Top Three Words: {stats.topWords.join(', ')}</p>
            <p>Top Three Letters: {stats.topLetters.join(', ')}</p>
        </div>
    );
};

export default Stats;
