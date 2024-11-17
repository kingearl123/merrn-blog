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
    res.send('hello world');
});
app.use('/api/blogs', RoutesBlog);  // Ubah '/Blog' menjadi '/api/blogs' agar konsisten

module.exports = app;
