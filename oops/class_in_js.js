class Product {

    constructor(name, price){

        this.name = name;
        this.price = price;
    }

    getData(){

        const product = {
            name:this.name,
            price:this.price
        }
        return product;
    }
}

const p1 = new Product("iphone13", 55000);

console.log(p1.getData());