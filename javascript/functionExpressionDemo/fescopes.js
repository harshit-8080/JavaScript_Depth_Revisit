var x = function gun() {

    console.log("inside gun ");
}

x();

// gun(); -> not able to call from global because it's in x scope.


function f1() {
    console.log("inside f1()");

    function f2(){
        console.log("inside f2()");
    }

    f2();
}

f1();

// f2(); -> same as above it's not inside global scope it's in f1 scope