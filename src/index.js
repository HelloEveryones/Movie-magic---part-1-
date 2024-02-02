const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");
const configHandlebars = require("./config/configHandlebars");
const configExpress = require("./config/configExpress");

const app = express();
const port = 5000;

// Configure middleware
configHandlebars(app);
configExpress(app);

// Use the defined routes
app.use(routes);

mongoose.connect('mongodb://localhost:27017/movies')
  .then(() => {
    console.log('DB Connected!');
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  })
  .catch((err) => {
    console.error('Error connecting to DB:', err.message);
  });
