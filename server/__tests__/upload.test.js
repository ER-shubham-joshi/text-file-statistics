const request = require('supertest');
const express = require('express');
const multer = require('multer');
const app = express();
const { processText } = require('../utils/textProcessor');

// Configure multer for in-memory storage for testing
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const testFileText = `Hello world! This is a test file. This file includes a variety of symbols: !, @, #, $, %, ^, &, *.`

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const text = req.file.buffer.toString('utf8');
    const result = processText(text);

    res.status(200).json(result);
});

describe('File Upload Integration Test', () => {
    test('should upload a file and process it', async () => {
        const mockFile = Buffer.from(testFileText);

        const response = await request(app)
            .post('/upload')
            .attach('file', mockFile, 'test.txt')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.status).toBe(200); // StatusCode
        expect(response.body.words).toBe(14); // Words count
        expect(response.body.letters).toBe(58); // Letters count
        expect(response.body.symbols).toBe(19); // Symbols count
        expect(response.body.topWords).toEqual(['this', 'a', 'file']);  // Top words
        expect(response.body.topLetters).toEqual(['l', 'i', 's']); // Top letters
    });
});