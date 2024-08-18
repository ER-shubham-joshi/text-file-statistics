const errorHandler = (err, req, res, next) => {
    if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') return res.status(400).send('File is too large. Maximum size is 1 MB.');
        if (err.message) return res.status(400).send(err.message);

        console.error(err);
        res.status(500).send('Internal Server Error');
    }
    next();
};

module.exports = errorHandler;
