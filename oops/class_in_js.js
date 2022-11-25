class Product {

    description = "this is prodcut class";
    constructor(name, price, description){

        // here we declare data members
        this.name = name;
        this.price = price;
        this.description = description
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

const iphone = new Product("iphone13", 55000, "iphone 13 128GB");
const macbook = new Product("macbook pro", 200000, "m1 chip 512 SSD");


console.log(iphone);
// Product { name: 'iphone13', price: 55000 }

console.log(macbook);
// Product { name: 'macbook pro', price: 200000 }



console.log(iphone.getData());