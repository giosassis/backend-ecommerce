const { v4: uuidv4 } = require("uuid");

class createFunctionaryService {
  constructor(functionaryRepository) {
    this.functionaryRepository = functionaryRepository
  }

  execute({ firstName, lastName, brithDate, adress, office, salary, email }) {

    const functionaryAlreadyExists = this.functionaryRepository.findFunctionarytByEmail(email)

    if (functionaryAlreadyExists) {
      throw new Error("Employee already registered");
    }

    const newFunctionary = {
      id: uuidv4(),
      firstName,
      lastName,
      brithDate,
      adress,
      office,
      salary,
      email,
      hireDate: new Date()
    };

    this.functionaryRepository.registerFunctionary(newFunctionary);
    return newFunctionary;
  }
}

module.exports = createFunctionaryService;
