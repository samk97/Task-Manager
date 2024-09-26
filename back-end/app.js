// app.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB connection function
const connectDB = async () => {
  try {
    const MONGODB_URI = `mongodb+srv://user:Sam@150797@taskmanager.15zd0.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager`;
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

// Call the connectDB function
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
