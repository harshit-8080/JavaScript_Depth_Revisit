// How this works or what is this in js?
// read each and every line of this file.
/**

Behaviour of this in js is different thans c++ and java.

1.  In JS, this keyword refrences to the CALLING SITE OR WHO CALLS.

2.  Calling site means where the function or class is called.

3.  Now check the new.js to understand.


 */

function Product1(n, p) {
  console.log(this); // Product {}

  this.name = n;
  this.price = p;

  console.log(this); // Product { name: 'iphone13', price: 23000 }
}

const p1 = Product1("harshit", 2000);
// here Since we are not calling with new keyword, That's why calling site of "this" is global. That's why this is refrencing global object.

const p2 = new Product1("iphone13", 100000);
// here Since we are calling with new keyword, That's why calling site of "this" is global. That's why this is refrencing calling site i:e "p2".


// How this works or what is this in js?

/**

Behaviour of this in js is different thans c++ and java.

1.  In JS, this keyword refrences to the CALLING SITE OR WHO CALLS.

2.  Calling site means where the function or class is called.

3.  Now check the new.js to understand.



*/
