function Category(c) {
    
    this.category = c;
    this.getCategoryName = function f1() {
        console.log(this.name, this.price, this.category);
    }
}

Category.prototype.getDetails = function getDetails() {
    
    console.log("this is detail about category ", this.category);
}


function Product(n,p,c) {
    
    this.name = n;
    this.price = p;
    Category.call(this,c)
}

Product.prototype.example = function example() {
    
    console.log("this is example function");
}


const p = new Product("iphone",2000,"electronics");

Product.prototype.getDetails = Category.prototype.getDetails;


p.getCategoryName();

p.getDetails();

