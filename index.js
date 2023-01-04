// Imports
const express = require('express');
const routes = require('./routes.js');


// Express initialization
const app = express();


// Routes declaration
app.use('/', routes.get_home);


// Initialize server
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});