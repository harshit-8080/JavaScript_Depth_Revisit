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

const iphone = new Product("iphone13", 55000);
const macbook = new Product("macbook pro", 200000);


console.log(iphone);
// Product { name: 'iphone13', price: 55000 }

console.log(macbook);
// Product { name: 'macbook pro', price: 200000 }



console.log(iphone.getData());