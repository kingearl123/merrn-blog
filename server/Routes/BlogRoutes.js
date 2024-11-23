const express = require('express');
const ModelsBlog = require('../Models/BlogModels');
const multer = require('multer');
const path = require('path');
const router = express.Router();

router.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploads = multer({ storage });

router.get('/', async (req, res) => {
    try {
        const blogs = await ModelsBlog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blogs' });
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const blog = await ModelsBlog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blog' });
    }
});

router.post('/create', uploads.single('image'), async (req, res) => {
    try {
        const { title, body, date } = req.body;

        if (!title || !body || !date) {
            return res.status(400).send('All fields are required.');
        }

        if (!req.file) {
            return res.status(400).send('Image is required.');
        }

        const newBlog = new ModelsBlog({
            title,
            body,
            date,
            image: req.file.filename,
        });

        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create blog' });
    }
});

router.put('/update/:id', uploads.single('image'), async (req, res) => {
    try {
        const { title, body, date } = req.body;

        const blog = await ModelsBlog.findById(req.params.id);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }

        blog.title = title || blog.title;
        blog.body = body || blog.body;
        blog.date = date || blog.date;
        if (req.file) {
            blog.image = req.file.filename;
        }

        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: 'Failed to update blog' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const blog = await ModelsBlog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: 'Failed to delete blog' });
    }
});

module.exports = router;
