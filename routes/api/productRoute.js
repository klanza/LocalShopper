const router = require("express").Router();
const productController = require("../../controllers/productsController.js");

//rename this file later on

router.route("/")
  .get(productController.findAll)
  .post(productController.create);

// router.route("/:name")
//   .get(productController.findByProductName)
//   .post(productController.create);

router
  .route("/:id")
  // .get(productController.findById)
  .put(productController.update)
  .get(productController.findAll)
  // .delete(productController.remove);

module.exports = router;