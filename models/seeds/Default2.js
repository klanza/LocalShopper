const ko = require('nekodb');

const defaultUser2 = ko.models.User.create({
    _id: '2',
    username: 'BigBox Store',
    password: 'password',
    address: '666 Evil St.',
    picture: '',
    storeName: 'BigBox HQ',
    mapLng: '',
    mapLong: '',
    storeHours: [],
});

defaultUser2.save().catch((errors) => {
    console.log(errors);
    // errors will contain the password field,
    // since it doesn't contain a String as was required
});
