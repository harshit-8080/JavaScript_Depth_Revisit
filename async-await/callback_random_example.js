function download(url,fun) {
    
    console.log("song downloading started");

    setTimeout(() => {
        let song = "excuses";
        fun(song);
    }, 2000);
}

function writing(song,fun) {
    
    console.log("wirting to file started");

    setTimeout(() => {
        let fileName = song + ".mp3";
        fun(fileName);
    }, 2000);
}

function uploading(fileName,fun) {
    
    console.log("uploading to drive started");

    setTimeout(() => {
        let newLink = fileName + "drive.google.com";
        fun(newLink);
    }, 2000);

}

download("pk.com", function(song){
    console.log("downloading completed");
    console.log("song => ", song);

    writing(song, function(fileName){
        console.log("writing completed");
        console.log("fileName => ", fileName);

        uploading(fileName, function(link){
            console.log("uploading completed");
            console.log("Uploaded link => ", link);
        })
    })

})



