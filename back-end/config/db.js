const mongoose = require('mongoose');

const MONGODB_URI = `mongodb+srv://username:password@cluster0.mongodb.net/taskmanager?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
