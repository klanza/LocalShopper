const router = require("express").Router();
const productController = require("../../controllers/productController");

//rename this file later on

router.route("/")
  .get(productController.findAll)
  .post(productController.create);

// router.route("/:name")
//   .get(productController.findByProductName)
//   .post(productController.create);

router.route("/:id")
  // .get(productController.findById)
  .put(productController.update)
  // .delete(productController.remove);

router.route("/search/:keyword")
.get(productController.findByKeyword);

router.route('/upload/:userID')
.post(productController.uploadWithCSV);


module.exports = router;