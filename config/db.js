const mongoose = require('mongoose');
// Get DB connection string 
// 1.from default.json file
// const config = require('config');
// const db_con_str = config.get('mongoURI');

// or 2. from .env file
const db_con_str = process.env.DB

const connectDB = async () => {
  try {
    await mongoose.connect(
        db_con_str,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
