function customFetch(callback){

    console.log("starting downloading");

    setTimeout(() => {

        let song = "excuses";

        console.log("downloaded song -> ", song);
       
        console.log("downloading completed");

        callback(song);

    }, 3000);
}

function save (callback){
    
    customFetch(function(song){
        console.log("open you folder to access = ", song);

        console.log("saving to folder ");
        let fileName = song + ".mp3";
        callback(fileName);
    });

}

save(function(fileName){
    console.log("saved file = ",fileName );
})


