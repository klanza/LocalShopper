const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/products", productRoutes);

module.exports = router;