const { User } = require('../models')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ 'username': username }).then((userMatch) => {
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect username' })
			}
			bcrypt.compare(password, userMatch.password, function(err, res) {
    			if(err){
    				return done(err);
    			}
    			if(res){
    				return done(null, userMatch);
    			}
    			return done(null, false, { message: 'Incorrect password' });
			});
		}).catch(errors => {
    		done(errors);
    	})
	}
)


module.exports = strategy
