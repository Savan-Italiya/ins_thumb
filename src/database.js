const mongoose = require('mongoose');
const {
  mongo, env,
} = require('./config');

exports.connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://is:is123@hilance.6ehjiul.mongodb.net/WA_Sender_Institute?retryWrites=true&w=majority");
    console.log("✅ Successfully connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};



