const router = require("express").Router();
const userController = require("../../controllers/usersController.js");

//rename this file later on

router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// router.route("/:name")
//   .get(userController.findByProductName)
//   .post(userController.create);

router
  .route("/:username")
  // .get(userController.findByUsername)
  .put(userController.update)
  // .delete(userController.remove);

module.exports = router;