function settNamme(callback){

    let name = "HARSHIT RAJ";
    callback(name);

}

function printGreeting(name,callback){

    console.log("happy diwali to  ", name);
    callback();
}

function askForGifts(callback){

   console.log("Where is my gifts ? ");
   callback();
}

function getYourGifts(){

   console.log("get your gifts @gift.com");
 }


 // callback hell 
settNamme(function(name){

    console.log("Name = ",name);
    printGreeting(name,function () {      
       
        askForGifts(function(){
            console.log("you can get your gift ny calling below function ");
            getYourGifts();
        });

    })

});

