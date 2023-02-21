const player = {
  firstName: "harshit",
  details: function (params) {
    console.log(this.firstName);
  },
};

const test = function () {
  this.details();
};

const obj = {
  firstName: "john",
};

let x = test.bind(player);

x();
