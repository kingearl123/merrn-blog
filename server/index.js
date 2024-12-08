const express = require('express');
const app = require('./controllers/server');
const connectDB = require('./db/db');

app.use('/uploads', express.static('uploads'));

connectDB();

const port = 2000;

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

