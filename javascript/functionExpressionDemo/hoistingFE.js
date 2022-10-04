console.log(x);

// x(); -> not able to call because x is undefined after 1st phase of parsing.
// and after 1st phase and before 2nd phase function is not getting assigned yet.
// that's why it's undefined and we are not able to call it.

var x = function(){
    console.log("jjjj");
}