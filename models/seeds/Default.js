const ko = require('nekodb');

const defaultUser = ko.models.User.create({
    _id: '1',
    username: 'LocalShopper',
    password: 'password',
    address: '1234 Place St.',
    picture: '',
    storeName: 'LocalShopper HQ',
    mapLng: '',
    mapLong: '',
    storeHours: [],
});

defaultUser.save().catch((errors) => {
    console.log(errors);
    // errors will contain the password field,
    // since it doesn't contain a String as was required
});
