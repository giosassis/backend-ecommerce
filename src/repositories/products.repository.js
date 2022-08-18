class ProductsRepository {

  products = [];

  findProductByName(name) {
    return this.products.find(product => product.name === name);
  }

  createProduct(newProduct) {
    this.products.push(newProduct);
  }


  getProducts() {
    return this.products;
  }

}

module.exports = ProductsRepository;
