// How this works or what is this in js?

/**

Behaviour of this in js is different thans c++ and java.

1.  In JS, this keyword refrences to the CALLING SITE OR WHO CALLS.

2.  Calling site means where the function or class is called.

3.  Now check the new.js to understand.


 */

function Product(n,p) {
    
    console.log(this);  // Product {}

    this.name = n;
    this.price = p;

    console.log(this); // Product { name: 'iphone13', price: 23000 }

}



const p1 = Product("harshit", 2000);
// here Since we are not calling with new keyword, That's why calling site of "this" is global. That's why this is refrencing global object.



const p2 = new Product("iphone13", 100000);
// here Since we are calling with new keyword, That's why calling site of "this" is global. That's why this is refrencing global object.
