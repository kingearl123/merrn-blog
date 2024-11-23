const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date,
    image: { type: String, required: true }
})

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;