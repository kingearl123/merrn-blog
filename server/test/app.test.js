const request = require('supertest');
const app = require('../controllers/server');
const mongoose = require('mongoose');
const BlogModels = require('../Models/BlogModels');
const { MongoMemoryServer } = require('mongodb-memory-server');

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
        // Menghapus semua dokumen dalam model sebelum setiap pengujian
        await BlogModels.deleteMany({});
    });

    it('should create a new blog', async () => {
        const response = await request(app)
            .post('/api/blogs/create') // Updated route
            .send(blogData)
            .expect(201);

        expect(response.body.title).toBe(blogData.title);
        expect(response.body.body).toBe(blogData.body);
        expect(new Date(response.body.date)).toBeInstanceOf(Date);
    });

    it('should get all blogs', async () => {
        const response = await request(app)
            .get('/api/blogs') // Updated route
            .expect(200);

        expect(response.body).toBeInstanceOf(Array);
    });

    it('should get a blog by id', async () => {
        const createdBlog = await request(app)
            .post('/api/blogs/create') // Updated route
            .send(blogData)
            .expect(201);

        const response = await request(app)
            .get(`/api/blogs/get/${createdBlog.body._id}`) // Updated route
            .expect(200);

        expect(response.body.title).toBe(blogData.title);
        expect(response.body.body).toBe(blogData.body);
        expect(new Date(response.body.date)).toBeInstanceOf(Date);
    });

    it('should update a blog', async () => {
        const createdBlog = await request(app)
            .post('/api/blogs/create') // Updated route
            .send(blogData)
            .expect(201);

        const updatedBlogData = {
            title: 'Updated Test Blog Title',
            body: 'Updated Test Blog Body',
        };

        const response = await request(app)
            .put(`/api/blogs/update/${createdBlog.body._id}`) // Updated route
            .send(updatedBlogData)
            .expect(200);

        expect(response.body.title).toBe(updatedBlogData.title);
        expect(response.body.body).toBe(updatedBlogData.body);
    });

    it('should delete a blog', async () => {
        const createdBlog = await request(app)
            .post('/api/blogs/create') // Updated route
            .send(blogData)
            .expect(201);

        await request(app)
            .delete(`/api/blogs/delete/${createdBlog.body._id}`) // Updated route
            .expect(204);

        await request(app)
            .get(`/api/blogs/get/${createdBlog.body._id}`) // Updated route
            .expect(404);
    });
});
