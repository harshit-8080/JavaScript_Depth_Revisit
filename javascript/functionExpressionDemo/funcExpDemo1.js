function fun() {
    console.log("fun function called ");
}

function gun(f1){

    console.log("inside gun");

    f1();

    console.log("leaving gun");
}

gun(fun);

gun(function(){
    console.log("new function passed");
})