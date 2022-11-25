class Product {

    constructor(name, price){

        // here we declare data members
        this.name = name;
        this.price = price;
    }
    
    // here we declare methds
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