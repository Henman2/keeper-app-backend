const app = require('./app');
const path = require('path');
const connectDB = require('./config/dbConfig');
const dotenv = require('dotenv');
const port = process.env.PORT || 3800;
const hostname = 'localhost';

// Load environment variables from .env file in the config directory
dotenv.config({ path: path.join(__dirname, 'config', '.env') });
connectDB(); // Connect to MongoDB database

app.listen(port, hostname, (error) => {
    if (error) {
    console.log('Connection Error:' + error);
    } else console.log(`server is running on port: ${port}`);
});