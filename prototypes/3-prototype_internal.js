function ProductA(name, price) {
    
    this.name = name;
    this.price = price;
}

ProductA.prototype.displayProdcut = function fun(params) {

    console.log(`Name of Product = ${this.name} and Price of Product = ${this.price}`);

}

const p = new ProductA("iphone", 10000);

p.displayProdcut();

console.log(ProductA.prototype.displayProdcut);

console.log(ProductA.prototype.constructor);

console.log(p.__proto__.constructor);
