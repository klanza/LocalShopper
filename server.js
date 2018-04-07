const express = require("express");
const path = require("path");
const ko = require('nekodb')
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB through nekodb
ko.connect({
    client: 'mongodb',
    url: 'mongodb://localhost:27017/localshopper'
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



