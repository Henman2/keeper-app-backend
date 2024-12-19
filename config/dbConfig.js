const mongoose = require("mongoose");

const connectDB = async () => {
    
    
    const dbName = process.env.DB_NAME;
    try {
        if (process.env.NODE_ENV === 'production') {
            const uri = process.env.MONGODB_URI;
            await mongoose.connect(uri, { dbName });
            
        } else {
            const uri = process.env.DB_SERVER;
            await mongoose.connect(uri);
        } 
        console.log('Connected to MongoDB database');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
};
module.exports = connectDB;
