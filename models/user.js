const ko = require('nekodb');
const bcrypt = require('bcrypt'); 
const saltRounds = process.env.SALTROUNDS;

// contains at least 1 lowercase, 1 uppercase, and one number
const Password = ko.String.minlength(8)
                          .match(/[a-z]/)
                          .match(/[A-Z]/)
                          .match(/\d/)

const User = ko.Model('User', {
    username: ko.String,
    hash: ko.String,
    salt: ko.String,
    // $$hooks: {
    //     presave: (user, next) => {
    //         if (user.isUpdated('password')) {
    //             bcrypt.hash(user.password, saltRounds, function (err, hash) {
    //                 if (err) {
    //                     return next(err)
    //                 }
    //                 user.password = hash
    //                 next()
    //             })
    //         } else {
    //         next()
    //     }
    //     }
    // },
    $$indexes: {
        username: {
            unique: true
        }
    },
    address: ko.String.optional(),
    picture: ko.String.optional(),
    storeName: ko.String.optional(),
    mapLng: ko.Number.optional(),
    mapLong: ko.Number.optional(),
    storeHours: [ko.String, null],
});

// User.methods = {
// 	checkPassword: function(inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.local.password)
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10)
// 	}
// }

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
