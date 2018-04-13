const express = require("express");
const path = require("path");
const ko = require('nekodb')
const routes = require('./routes')
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB through nekodb
ko.connect({
    client: 'mongodb',
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/localshopper',
});

// Send every request to the React app
// Define any API routes before this runs

app.use(routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
