const express = require("express");
const { getAllProducts, renderAddProductForm, addProduct, renderEditProductForm, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/",getAllProducts);
router.get("/add", renderAddProductForm);
router.post("/add", addProduct);
router.get("/edit/:id", renderEditProductForm);
router.post("/edit/:id", updateProduct);
router.get("/delete/:id", deleteProduct);



module.exports = router;
