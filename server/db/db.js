const mongoose = require('mongoose');

const connectDB = async () => {
    const url = "mongodb+srv://my-project:12345@cluster0.paj90wj.mongodb.net/my-blog?retryWrites=true&w=majority&appName=Cluster0";
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
