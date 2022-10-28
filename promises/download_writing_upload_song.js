function fetchData(url) {

    return new Promise(function (resolve, reject) {
        
        console.log("downloaded started");

        setTimeout(function(){

            let song = "excuses_song";
            resolve(song);

        },3000);
    })
    
}

function writeToFile(song) {

    return new Promise(function (resolve, reject) {
        
        console.log("Writing started");

        setTimeout(function(){

            let filename = song + ".mp3";
            resolve(filename);

        },3000);
    })
    
}
function uploadToDrive(filename) {

    return new Promise(function (resolve, reject) {
        
        console.log("uploading started");

        setTimeout(function(){

            let uploadedLink = filename + ".drive.google.com";
            resolve(uploadedLink);

        },3000);
    })
    
}


let song = fetchData("www.song.com");
song.then(function(value){
    console.log("song is downloaded =>  ", value);

    let filename = writeToFile(value);
    filename.then(function(value){
        console.log("writing is completed => ", value);

        let uploadedLink = uploadToDrive(value);
        uploadedLink.then(function (value) {
            console.log("uploading is completed => ", value);
        })

    })

    

})