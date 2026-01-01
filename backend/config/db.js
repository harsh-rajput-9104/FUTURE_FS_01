const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // We don't exit process here to keep the server running even if DB fails initially, 
    // but typically you might want to exit. 
    // process.exit(1);
  }
};

module.exports = connectDB;
