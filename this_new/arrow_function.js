// function fun(n,p,d) {
    
//     this.name = n;
//     this.price = p;
//     this.desc = d;
//     this.display = function gun() {
        
//         console.log("printing ", this);
//     }
// }

const obj = {

    name : "harshit",
    age : 100,
    display: function fun() {
        console.log(this);
    },
    show:()=>{
        console.log(this);
    }

}

// obj.display();
// obj.show();


let lop = {
    username : 'Hans Gruber',
    hello:function f1() {
        console.log("hello ",this.username);
    },
    bye:()=>{
        city = "chapra"
        console.log("this ",this);
        console.log("bye ", this.city);
    }

};

console.log(lop);
lop.hello();
lop.bye();
