const { firestore, mysqlConnection, esClient } = require("../../../config/db");
const Product = require("../../../models/Firestore/productModel");

module.exports = async (productData) => {
  const { name, category, price, image } = productData;
  const newProduct = { name, category, price, image, createdAt: new Date() };

  // Firebase Firestore
  const docRef = await firestore.collection("products").add(newProduct);
  newProduct.id = docRef.id;

  // MySQL
  mysqlConnection.query(
    "INSERT INTO products (name, category, price, image, createdAt) VALUES (?, ?, ?, ?, ?)",
    [name, category, price, image, newProduct.createdAt]
  );

  // ElasticSearch
  await esClient.index({
    index: "products",
    body: newProduct,
  });

  return newProduct;
};
