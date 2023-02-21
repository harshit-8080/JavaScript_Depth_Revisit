var school = "ccs"; // global 
function fetchYANG(x,callback,callback2) {
   

    college = "lnct"; // auto global
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
        console.log(school);
        console.log(college);

  }, function(){
    console.log("2nd callback");
    console.log(school);
    console.log(college);
  })

 

