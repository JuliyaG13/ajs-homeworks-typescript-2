class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class Cart {
    constructor() {
      this.items = [];
    }
  
    addProduct(product) {
      this.items.push(product);
    }
  
    getProducts() {
      return this.items;
    }
  
    totalCost() {
      return this.items.reduce((sum, product) => sum + product.price, 0);
    }
  
    totalCostWithDiscount(discount) {
      if (discount < 0 || discount > 1) {
        throw new Error("Discount must be between 0 and 1");
      }
      return this.totalCost() * (1 - discount);
    }
  
    removeProductById(productId) {
      this.items = this.items.filter(product => product.id !== productId);
    }
  }
  
  module.exports = { Cart, Product };
  