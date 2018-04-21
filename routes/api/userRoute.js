const router = require('express').Router();
const userController = require('../../controllers/usersController.js');
const passport = require('passport');

// General route to get all
router.route('/')
  .get(userController.findAll);

// Matches with "/api/users"
router
  .post('/', userController.create)
  .post('/login', userController.login);
router
	.get('/me', userController.currentUser);
// clear cookie/connect.sid session.
router
.get('/logout', userController.logout);

module.exports = router;
