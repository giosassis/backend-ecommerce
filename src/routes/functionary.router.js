const { Router } = require("express");
const FunctionaryService = require("../services/createFunctionary.service");
const FunctionaryRepository = require("../repositories/funcionary.repository");

const functionaryRepository = new FunctionaryRepository();
const functionaryService = new FunctionaryService(functionaryRepository);

const routes = Router();

routes.get(
  "/functionary",
  (req, res, next) => {
    console.log("oi");
    next();
  },
  (req, res) => {
    res.json(functionaryRepository.getFunctionary());
  }
);

routes.post("/functionary", (req, res) => {
  const { firstName, lastName, brithDate, adress, office, salary, email } =
    req.body;

  const newFunctionary = functionaryService.execute({
    firstName,
    lastName,
    brithDate,
    adress,
    office,
    salary,
    email,
  });

  return res.json(newFunctionary);
});

module.exports = routes;
