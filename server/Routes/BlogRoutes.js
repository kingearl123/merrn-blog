const express = require('express');
const ModelsBlog = require('../Models/BlogModels');
const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await ModelsBlog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blogs' });
    }
});

// Get a blog by ID
router.get('/get/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const post = await ModelsBlog.findById(id); // Correctly use findById
        if (!post) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(post); // Return the found blog
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch blog' });
    }
});

// Create a new blog
router.post('/create', async (req, res) => {
    try {
        const newBlog = new ModelsBlog(req.body);
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create blog' });
    }
});

// Delete a blog
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedBlog = await ModelsBlog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(204).send(); // Send no content after successful deletion
    } catch (error) {
        res.status(404).json({ message: 'Blog not found' });
    }
});

// Update a blog
router.put('/update/:id', async (req, res) => {
    try {
        const updatedBlog = await ModelsBlog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(404).json({ message: 'Blog not found' });
    }
});

module.exports = router;
