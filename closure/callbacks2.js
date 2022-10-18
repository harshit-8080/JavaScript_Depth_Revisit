function fetchYANG(x,callback,callback2) {
   
    if(x < 25){
        return callback(24, "harshit");
    }
    else{
        callback(x, "bajrang");
        callback2();

    }
    
  }

  fetchYANG(100, (age,name) => {

        console.log(age);
        console.log(name);

  }, function(){
    console.log("2nd callback");
  })

 

