var teacher = "sanket";

function fun(){

    teacher = "pulkit";
    console.log("hi = ", teacher);
}

fun();

console.log(teacher);

// in first phase
    // var teacher and function fun assigned a scope


// in second phase
    // at line 5 =>  teacher was not assigned a scope that's why we moved to outer scope (global scope and check if we have teacher or not
    // since var teacher was already there we just changed value sanket to pulkit )   