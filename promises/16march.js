console.log("start");

let a = Promise.resolve("harshit"); 

console.log(a);

a.then((v) => {
  console.log(v);
});

console.log("end");
