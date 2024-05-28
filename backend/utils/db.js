const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/tp_database";

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('connect to database successfully...')
    } catch (error) {
        console.error('database connection failed...', error);
        process.exit(0);
    }
}

module.exports = connectDB;