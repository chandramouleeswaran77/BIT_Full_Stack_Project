const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/your_database_name", {
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process with a failure
  }
};

module.exports = connectDb;
