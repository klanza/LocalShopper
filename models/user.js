const ko = require('nekodb')

const User = ko.Model('User', {
    username: ko.String, 
    password: ko.String,
    address: ko.String,
    picture: ko.Document,
    storeName: ko.String,
    mapLng: ko.Number,
    mapLong: ko.Number,
    storeHours: [ko.string],
})

module.exports = User;