const { Router } = require("express");
const ProductService = require("../services/createProduct.service");
const ProductsRepository = require("../repositories/products.repository");

const productsRepository = new ProductsRepository();
const productService = new ProductService(productsRepository);

const routes = Router();

routes.get("/products", (req, res) => {
  res.json(productsRepository.getProducts());
});

routes.post("/products", (req, res) => {
  try {
    const { name, description, price, quantity, image_url } = req.body;

    const newProduct = productService.execute({
      name,
      description,
      price,
      quantity,
      image_url
    });

    return res.json(newProduct);
  } catch (error) {
    return res.json(error.message);
  }
});

module.exports = routes;
