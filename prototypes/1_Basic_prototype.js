function Product(name,price) {
    
    this.name = name;
    this.price = price;
}

const p = new Product("iphone", 100000);



Product.prototype.display = function display() {
    
    console.log(`Name of Product = ${this.name} and Price of Product = ${this.price}`);
}
Product.prototype.fun1 = function display() {
    
    console.log("this is function 2 ");
}
Product.prototype.fun2 = function display() {
    
    console.log("this is function 2 ");
}
Product.prototype.fun3 = function display() {
    
    console.log("this is function 4 ");
}


console.log(Product.prototype);
p.display();
p.fun1();
p.fun2();
p.fun3();


console.log(Object);
console.log(Object.prototype.constructor);