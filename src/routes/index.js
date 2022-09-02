const { Router } = require("express");
const productsRouter = require("./products.router");
const functionaryRouter = require("./functionary.router");

const routes = Router();

routes.use(productsRouter);
routes.use(functionaryRouter);

module.exports = routes;
