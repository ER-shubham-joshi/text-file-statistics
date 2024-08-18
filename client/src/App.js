// src/App.js
import React from 'react';
import FileProcessor from './components/FileProcessor';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Text File Statistics</h1>
      <FileProcessor />
    </div>
  );
}

export default App;
