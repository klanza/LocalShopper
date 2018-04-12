const ko = require('nekodb');
const bcrypt = require('bcrypt'); 
const saltRounds = process.env.SALTROUNDS;

// contains at least 1 lowercase, 1 uppercase, and one number
const Password = ko.String.minlength(8)
                          .match(/[a-z]/)
                          .match(/[A-Z]/)
                          .match(/\d/)

const User = ko.Model('User', {
    _id: ko.Number,
    username: ko.String,
    password: Password,
    $$hooks: {
        presave: (user, next) => {
            if (user.isUpdated('password')) {
                bcrypt.hash(user.password, saltRounds, function (err, hash) {
                    if (err) {
                        return next(err)
                    }
                    user.password = hash
                    next()
                })
            } else {
            next()
        }
        }
    },
    $$indexes: {
        username: {
            unique: true
        }
    },
    address: ko.String,
    picture: ko.String,
    storeName: ko.String,
    mapLng: ko.Number,
    mapLong: ko.Number,
    storeHours: [ko.String],
    local: {
		username: { type: String, unique: false, required: false },
		password: { type: String, unique: false, required: false }
	},
});

User.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// User.pre('save', function(next) {
// 	if (!this.local.password) {
// 		console.log('=======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		this.local.password = this.hashPassword(this.local.password)
// 		next()
// 	}
// })

module.exports = User;
