function customFetch(callback){

    console.log("started downloading");

    setTimeout(function(){
        console.log("downloading completed");
        let song = "chak de India";
        callback(song);

    },3000)
}

function writingToFile(callback, callback2){

    console.log("started wirting to file");
    setTimeout(() => {
        console.log("writing is done");
        let fileName = "song.mp3";
        callback(fileName);
        
        console.log("uploading to drive");
        setTimeout(function(){
            console.log("uploading completed");
            let uploadedURL = "www.drive.com/mp3"
            callback2(uploadedURL);

        },2000);
    }, 1000);
}


customFetch(function(song){
    console.log("downloaded song -> ", song);

    writingToFile(function(fileName){
        console.log("FileName = ", fileName);
    }, function(uploadedURL){
        console.log("upload link = ", uploadedURL);
    });

});

