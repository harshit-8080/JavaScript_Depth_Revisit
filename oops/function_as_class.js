function fun (name, price, description){

    this.name = name;
    this.price = price;
    this.description = description
}

const product = new fun("iphone13", 20000, "iphone 13 128 gb");

console.log(product);