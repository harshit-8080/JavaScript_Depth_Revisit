function Product(n,p) {
    
    console.log(this);  // Product {}

    this.name = n;
    this.price = p;

    console.log(this); // Product { name: 'iphone13', price: 23000 }

    // BYDEFAULT -> IT WILL RETURN THIS IN CASE WITH NEW 
}

const obj = new Product("iphone13", 23000); // While calling using new and not new. There is big difference. (UNDERSTAND THIS KEYWORD AFTER DETAIL)


const f1 = Product("harshit", 2444);




// What a function do when we write new keyword for a function



/**
 

        It does 5 things or steps (FOR NEW KEYWORD)
----------------------------------------------------------------------------------------------------

1. The new keyword creats a brand new empty js object.

2.  It does a process of linking (Inheritance).

3.  Calls the function with this property assigned to above empty object.

4.  Function execution starts and now we can use this "this" keyword to assign some property to this above empty object.

5.  From function it returns "this" if no other explicit object is returned.





 */