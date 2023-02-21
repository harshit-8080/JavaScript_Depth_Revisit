function ProductA(name, price) {
  this.name = name;
  this.price = price;
}

ProductA.prototype.displayProdcut = function fun(params) {
  console.log(this);
  console.log(
    `Name of Product = ${this.name} and Price of Product = ${this.price}`
  );
};

const p = new ProductA("iphone", 10000);

p.displayProdcut();
// ProductA { name: 'iphone', price: 10000 }
// Name of Product = iphone and Price of Product = 10000

p.__proto__.displayProdcut(); // INTERRESTING CASE ----
// { displayProdcut: [Function: fun] }
// Name of Product = undefined and Price of Product = undefined

console.log(ProductA.prototype.displayProdcut);

console.log(ProductA.prototype.constructor);

console.log(p.__proto__.constructor == ProductA);
