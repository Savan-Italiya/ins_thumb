const mongoose = require('mongoose');
const {
  mongo, env,
} = require('./config');

exports.connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@ppsllp.zltubwi.mongodb.net/WA_Sender_Institute?retryWrites=true&w=majority");
    console.log("✅ Successfully connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};



