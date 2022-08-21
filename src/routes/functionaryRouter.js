const { Router } = require("express");
const FunctionaryService = require("../services/createFunctionary.service");
const FunctionaryRepository = require("../repositories/funcionary.repository");

const FunctionaryRepository = new FunctionaryRepository();
const functionaryService = new createFunctionaryService(functionaryService);

const routes = Router();

routes.get("/functionary", (req, res) => {
  res.json(functionaryService.getFunctionary());
});

routes.post("/functionary", (req, res) => {
  try {
    const { firstName, lastName, brithDate, adress, office, salary, email } = req.body;

    const newFunctionary = FunctionaryService.execute({
     id: uuidv4(),
     firstName,
     lastName,
     brithDate,
     adress,
     office,
     salary,
     email
    });

    return res.json(newFunctionary);
  } catch (error) {
    return res.json(error.message);
  }
});






module.exports = routes;
