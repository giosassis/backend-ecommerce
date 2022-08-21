class FunctionaryRepository {
    functionary = [];
  
    findFunctionarytByEmail(email) {
      return this.functionary.find((functionary) => functionary.email === email);
    }
  
    registerFunctionary(newFunctionary) {
      this.functionary.push(newFunctionary);
    }
  
    getFunctionary() {
      return this.functionary;
    }
  }
  
  module.exports = FunctionaryRepository;
  