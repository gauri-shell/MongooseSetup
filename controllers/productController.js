
const Product = require("../models/product");

// Display all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("index", { products });
  } catch (err) {
    res.status(500).send("Error fetching products");
  }
};

// Render add product form
exports.renderAddProductForm = (req, res) => {
  res.render("addProduct");
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { title, price, description, imageUrl } = req.body;
    await Product.create({ title, price, description, imageUrl });
    res.redirect("/");
  } catch (err) {
    if(err.name==='ValidationError'){
      res.status(400).send(`Validation error : ${err.message}`);
    }
    res.status(500).send("Error adding product");
  }
};

// Render edit product form
exports.renderEditProductForm = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.render("editProduct", { product });
  } catch (err) {
    res.status(500).send("Error fetching product data");
  }
};

// Update product
exports.updateProduct = async (req, res) => {
  try {
    const { title, price, description, imageUrl } = req.body;
    await Product.findByIdAndUpdate(req.params.id, {
      title,
      price,
      description,
      imageUrl,
    });
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error updating product");
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Error deleting product");
  }
};



//const Product = require("../models/product");
// // Display all products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.render("index", { products });
//   } catch (err) {
//     res.status(500).send("Error fetching products");
//   }
// };

// // Render add product form
// exports.renderAddProductForm = (req, res) => {
//   res.render("addProduct");
// };

// // Add a new product
// exports.addProduct = async (req, res) => {
//   try {
//     const { title, price, description, imageUrl } = req.body;
//     await Product.create({ title, price, description, imageUrl });
//     res.redirect("/");
//   } catch (err) {
//     res.status(500).send("Error adding product");
//   }
// };

// // Render edit product form
// exports.renderEditProductForm = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.render("editProduct", { product });
//   } catch (err) {
//     res.status(500).send("Error fetching product data");
//   }
// };

// // Update product
// exports.updateProduct = async (req, res) => {
//   try {
//     const { title, price, description, imageUrl } = req.body;
//     await Product.findByIdAndUpdate(req.params.id, {
//       title,
//       price,
//       description,
//       imageUrl,
//     });
//     res.redirect("/");
//   } catch (err) {
//     res.status(500).send("Error updating product");
//   }
// };

// // Delete product
// exports.deleteProduct = async (req, res) => {
//   try {
//     await Product.findByIdAndDelete(req.params.id);
//     res.redirect("/");
//   } catch (err) {
//     res.status(500).send("Error deleting product");
//   }
// };



