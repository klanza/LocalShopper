const router = require("express").Router();
const productsController = require("../../controllers/productsController");

//rename this file later on

router.route("/")
  .get(productsController.findAll)
  .post(productsController.create);

// router.route("/:name")
//   .get(productController.findByProductName)
//   .post(productController.create);

router.route("/:id")
  // .get(productController.findById)
  .put(productsController.update)
  .get(productsController.findAll)
  // .delete(productController.remove);

router.route("/search/:keyword")
.get(productsController.findByKeyword);

router.route('/upload/:userID')
.post(productsController.uploadWithCSV);


module.exports = router;