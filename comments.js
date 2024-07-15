// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});