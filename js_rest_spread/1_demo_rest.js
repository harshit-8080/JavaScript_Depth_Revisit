/**
 
Depending on the context, the syntax ... can be used as "rest" parameters or "spread" syntax. 

We can use rest and spread with arrays or objects.

 */

// The rest parameters are used to pack

let { ...pairs } = { a: 10, b: 20, c: 30, d: 40 };

console.log(pairs);

let { a, b, ...c2d } = { a: 10, b: 20, c: 30, d: 40 };

console.log(c2d);
