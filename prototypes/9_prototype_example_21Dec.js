function Product(name,price) {    
    this.name = name;
    this.price = price;
}


p1 = new Product("iphone",1000);

Product.prototype.details = function() {
    console.log(`Name of Product = ${this.name} and Price of Product = ${this.price}`);
}

console.log(Product.prototype == Product.prototype.constructor.prototype);

console.log(Product.prototype.constructor.prototype == p1.__proto__.constructor.prototype);