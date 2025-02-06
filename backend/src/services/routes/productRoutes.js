const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.delete("/products/:id", deleteProduct);

module.exports = router;
