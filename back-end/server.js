const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // Parse JSON bodies

// Import routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
