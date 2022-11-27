class Category{

    constructor(c){
        this.category = c; 
    }

    getCategoryName(){
        console.log("Category Name = ", this.category);
    }
}

class Product extends Category {

    constructor(n,p,c){

        super(c);
        this.name = n;
        this.price = p;
    }

    getDetails(){
        console.log("Details are below for given product");

        console.log();

        console.log("Product Name = ", this.name);

        console.log("Product Price = ", this.price);

        this.getCategoryName();
    }
}

const p = new Product("Iphone13", 10000, "electronics");

p.getDetails();

console.log(Product.prototype);