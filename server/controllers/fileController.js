const fs = require('fs');
const path = require('path');
const { processText } = require('../utils/textProcessor');

const uploadFile = (req, res) => {
    if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError.message);
    }

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = path.join(__dirname, '../uploads', req.file.filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }

        try {
            const stats = processText(data);
            res.status(200).json({
                message: 'File uploaded successfully!',
                ...stats,
            });
        } catch (err) {
            res.status(500).send('Error processing file.');
        }
    });
};

module.exports = { uploadFile };
