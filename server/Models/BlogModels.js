const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    date: Date
})

const BlogModel = mongoose.model('BlogSchema',BlogSchema);

module.exports = BlogModel;