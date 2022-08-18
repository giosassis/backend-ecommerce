const { v4: uuidv4 } = require("uuid");

class createProductService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  execute({ name, description, price, quantity, image_url }) {

    const isProductAlreadyCreated = this.productsRepository.findProductByName(name)

    if (isProductAlreadyCreated) {
      throw new Error("Product already exists");
    }

    const newProduct = {
      id: uuidv4(),
      name,
      description,
      price,
      quantity,
      image_url,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.productsRepository.createProduct(newProduct);
    return newProduct;
  }
}

module.exports = createProductService;
