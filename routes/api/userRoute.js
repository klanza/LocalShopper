const router = require('express').Router();
const userController = require('../../controllers/usersController.js');
const passport = require('passport');

router.route('/')
  .get(userController.findAll);

// this route is just used to get the user basic info
// router.get('/user', (req, res, next) => {
// 	console.log('===== user!!======')
// 	console.log(req.user)
// 	if (req.user) {
// 		return res.json({ user: req.user })
// 	} else {
// 		return res.json({ user: null })
// 	}
// })

// Matches with "/api/users"
router
  .post('/', userController.create)
  .post('/login', userController.login);
  // .post('/login', passport.authenticate('local', { successRedirect: '/',
  //                                                   failureRedirect: '/login' }));
router.get('/me',userController.currentUser);
// clear cookie/connect.sid session.
router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') 
		return res.json({ msg: 'logging you out' })
	} 
		return res.json({ msg: 'no user to log out!' })
	
});

module.exports = router;
