const request = require('supertest');
const app = require('../controllers/server'); // Pastikan rute sesuai
const mongoose = require('mongoose');
const BlogModels = require('../Models/BlogModels');
const { MongoMemoryServer } = require('mongodb-memory-server');
const path = require('path');

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

const blogData = {
    title: 'Test Blog Title',
    body: 'Test Blog Body',
    date: new Date(),
};

describe('Blog API', () => {
    beforeEach(async () => {
        await BlogModels.deleteMany({});
    });

    it('should create a new blog', async () => {
        const response = await request(app)
            .post('/api/blogs/create')
            .field('title', blogData.title)
            .field('body', blogData.body)
            .field('date', blogData.date.toISOString())
            .attach('image', path.join(__dirname, 'test-image.jpg')) // Tambahkan gambar
            .expect(201);

        expect(response.body.title).toBe(blogData.title);
        expect(response.body.body).toBe(blogData.body);
        expect(new Date(response.body.date)).toBeInstanceOf(Date);
        expect(response.body.image).toBeDefined();
    });

    it('should get all blogs', async () => {
        const response = await request(app).get('/api/blogs').expect(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('should get a blog by id', async () => {
        const createdBlog = await request(app)
            .post('/api/blogs/create')
            .field('title', blogData.title)
            .field('body', blogData.body)
            .field('date', blogData.date.toISOString())
            .attach('image', path.join(__dirname, 'test-image.jpg'))
            .expect(201);

        const response = await request(app)
            .get(`/api/blogs/get/${createdBlog.body._id}`)
            .expect(200);

        expect(response.body.title).toBe(blogData.title);
    });

    it('should update a blog', async () => {
        const createdBlog = await request(app)
            .post('/api/blogs/create')
            .field('title', blogData.title)
            .field('body', blogData.body)
            .field('date', blogData.date.toISOString())
            .attach('image', path.join(__dirname, 'test-image.jpg'))
            .expect(201);

        const updatedData = {
            title: 'Updated Blog Title',
            body: 'Updated Blog Body',
        };

        const response = await request(app)
            .put(`/api/blogs/update/${createdBlog.body._id}`)
            .field('title', updatedData.title)
            .field('body', updatedData.body)
            .expect(200);

        expect(response.body.title).toBe(updatedData.title);
    });

    it('should delete a blog', async () => {
        const createdBlog = await request(app)
            .post('/api/blogs/create')
            .field('title', blogData.title)
            .field('body', blogData.body)
            .field('date', blogData.date.toISOString())
            .attach('image', path.join(__dirname, 'test-image.jpg'))
            .expect(201);

        await request(app)
            .delete(`/api/blogs/delete/${createdBlog.body._id}`)
            .expect(204);

        await request(app)
            .get(`/api/blogs/get/${createdBlog.body._id}`)
            .expect(404);
    });
});
