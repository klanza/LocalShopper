const express = require("express");
const path = require("path");
const ko = require('nekodb')
const PORT = process.env.PORT || 3001;
const app = express();
const morgan = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const passport = require('passport');
const MongoStore = require('connect-mongo')(session)
// const dbConnection = require('./models') // loads our connection to the mongo database
const routes = require('./routes')
const login = require('./controllers/loginController');



// ===== Middleware ====
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
	session({
		secret: 'localshopperfuckyeah',
		store: new MongoStore({ url: process.env.MONGODB_URI || 'mongodb://localhost:27017/localshopper' }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

app.use(routes)

login(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;


