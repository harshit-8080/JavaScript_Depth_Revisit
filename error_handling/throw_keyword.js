
function fun(){
    console.log("printing at line 3");

    // throw "error occured at line 5";
    throw {
        "errorObject" : "line 7"
    }

    // throw keyword is used to throw a error.
}

try {
    fun();
} catch (error) {
    console.log("ERRRRRRRR");
    console.log(error);
}