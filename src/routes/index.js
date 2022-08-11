const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");

const routes = Router();
const products = [];

routes.get("/products", (req, res) => {
  res.json(products);
});

routes.post("/products", (req, res) => {
  const { name, description, price, quantity, image_url } = req.body;

  const isProductAlreadyCreated = products.find(product => product.name === name);
  
  if (isProductAlreadyCreated) {
    return res.status(400).json({ message: "Product already exists" });
  }

  products.push({
    id: uuidv4(),
    name,
    description,
    price,
    quantity,
    image_url,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return res.send();
});

module.exports = routes;
