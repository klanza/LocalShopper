const router = require("express").Router();
const booksController = require("../../controllers/productController");

//rename this file later on

router.route("/")
  .get(productController.findAll)
  .post(productController.create);

router
  .route("/:id")
  .get(productController.findById)
  .put(productController.update)
  .delete(productController.remove);

module.exports = router;