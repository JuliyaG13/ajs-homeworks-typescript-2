const { Cart, Product } = require('../cart');

describe('Cart', () => {
  let cart;
  let product1;
  let product2;
  let product3;

  beforeEach(() => {
   
    cart = new Cart();
    product1 = new Product(1, 'Product 1', 100);
    product2 = new Product(2, 'Product 2', 200);
    product3 = new Product(3, 'Product 3', 300);
  });

  test('should calculate total cost without discount', () => {
   
    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.addProduct(product3);
    
    expect(cart.totalCost()).toBe(600);
  });

  test('should calculate total cost with discount', () => {
    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.addProduct(product3);
    
    expect(cart.totalCostWithDiscount(0.2)).toBe(480); 
    expect(cart.totalCostWithDiscount(0)).toBe(600); 
    expect(cart.totalCostWithDiscount(1)).toBe(0); 
  });

  test('should throw error for invalid discount', () => {
    cart.addProduct(product1);
    
    expect(() => cart.totalCostWithDiscount(1.5)).toThrow('Discount must be between 0 and 1');
    expect(() => cart.totalCostWithDiscount(-0.1)).toThrow('Discount must be between 0 and 1');
  });

  test('should remove product by id', () => {
    cart.addProduct(product1);
    cart.addProduct(product2);
    cart.addProduct(product3);
    
    cart.removeProductById(2);
    expect(cart.getProducts()).toEqual([product1, product3]);

    cart.removeProductById(1);
    expect(cart.getProducts()).toEqual([product3]);

    cart.removeProductById(3);
    expect(cart.getProducts()).toEqual([]);
  });

  test('should handle empty cart', () => {

    expect(cart.totalCost()).toBe(0);
    expect(cart.totalCostWithDiscount(0.1)).toBe(0);
  });
});
