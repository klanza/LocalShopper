// require bcrypt
const bcrypt = require('bcryptjs');
// require models
const db = require('../models');
// require passport
const passport = require('passport');
// require passport-local
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  passport.use(new LocalStrategy((username, password, done) => {
    db.User
      .findOne({ username }).then((user) => {
        if (!user) {
          console.log('user == null');
          return done(null, false, { message: 'Incorrect username' });
        }
        // hash with user obj salt param
        const hashWord = bcrypt.hashSync(password, user.salt);
        // match hashWords
        if (user.hash === hashWord) {
          return done(null, user);
        }
        return done(null, false, { message: 'Incorrect password' });
      }).catch(err => console.error(err));
  }));

  // passport will authenticate and create the cookie!
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });
  passport.deserializeUser((username, done) => {
    db.User.findOne({ username })
      .then((user) => {
        if (user == null) {
          done(new Error('Wrong user id.'));
        }
        done(null, user);
      });
  });

  // function to call in route to make only logged in user be able to see page
  function authenticationMiddleware() {
    return (req, res, next) => {
      console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

      if (req.isAuthenticated()) return next();
      res.redirect('/login');
    };
  }
};
