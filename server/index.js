const app = require('./controllers/server');
const connectDB = require('./db/db');

connectDB();

const port = 2000;

app.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
});

