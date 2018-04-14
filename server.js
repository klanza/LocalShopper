const express = require("express");
const path = require("path");
const ko = require('nekodb')
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
const dbConnection = require('./models') // loads our connection to the mongo database
const routes = require('./routes')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'localshopperfuckyeah',
		store: new MongoStore({ url: process.env.MONGODB_URI || 'mongodb://localhost:27017/localshopper' }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// Send every request to the React app
// Define any API routes before this runs

/* Express app ROUTING */
// correct route?
// app.use('/auth', require('./auth'))

app.use(routes)

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});



