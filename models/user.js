const ko = require('nekodb')

const User = ko.Model('User', {
    _id: ko.Number,
    username: ko.String, 
    password: ko.String,
    address: ko.String,
    picture: ko.String,
    storeName: ko.String,
    mapLng: ko.Number,
    mapLong: ko.Number,
    storeHours: [ko.String],
})

module.exports = User;