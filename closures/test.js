function test() {
  let name = "test";
  function t1() {
    console.log(name);
  }

  return t1;
}


let x = test();
x();