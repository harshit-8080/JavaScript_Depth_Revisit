function customFetch(song1,callback){

    console.log("started downloading");

    setTimeout(function(){
        console.log("downloading completed");
        let song = song1;
        callback(song);

    },2000)
}

function writingToFile(song,callback){

    console.log("started wirting to file");
    setTimeout(() => {
        console.log("writing is done");
        let fileName = song + "mp3";
        callback(fileName);

    }, 2000);
}

function uploadingToDrive(fileName,callback){
    console.log("uploading started");

    setTimeout(function(){
        console.log("uploading is done");
        let newUrl = "www.drive.com/"+fileName;
        callback(newUrl);
    },2000)
}


customFetch("chakDeIndia", function(song){

    console.log("Downloaded song = ", song);

    writingToFile(song,function(fileName){

        console.log("File Name = ", fileName);
        uploadingToDrive(fileName, function(newUrl){

            console.log("new Url = ", newUrl);

        })
    })
})