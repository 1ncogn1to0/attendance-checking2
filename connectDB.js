// config/connectDB.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        };

        await mongoose.connect(process.env.MONGO_URI, dbOptions);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
