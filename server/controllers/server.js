const express = require('express');
const cors = require('cors');
const RoutesBlog = require('../Routes/BlogRoutes');

// create express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/uploads', express.static('uploads'));

app.use('/api/blogs', RoutesBlog); // Konsistensi endpoint

module.exports = app;
