let id1 = setInterval(function(){

    console.log("task again 1 ");

},2000)


// if we want to print "task again 1" 4 times only.


setTimeout(function(){

    clearTimeout(id1);


},8010);


// let id2 = setInterval(function(){

//   // console.log("task again 2 ");

//     clearInterval(id1);
//     clearInterval(id2)
// },10000)

