function settNamme(callback) {
  let name = "";

  setTimeout(() => {
    name = "harshit";
    callback(name);
  }, 1000);

  //   let name = "HARSHIT RAJ";
}

function printGreeting(name, callback) {
  console.log("happy diwali to  ", name);
  callback();
}

function askForGifts(callback) {
  console.log("Where is my gifts ? ");
  callback();
}

function getYourGifts() {
  console.log("get your gifts @gift.com");
}

console.log("start");

// callback hell
settNamme(function (name) {
  console.log("Name = ", name);
  printGreeting(name, function () {
    askForGifts(function () {
      console.log("you can get your gift ny calling below function ");
      getYourGifts();
    });
  });
});

console.log("end");
