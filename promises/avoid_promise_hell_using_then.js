function fetchData(url) {

    return new Promise(function (resolve, reject) {
        
        console.log("downloading started");

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

fetchData()
.then(function (value) {

    console.log("downloading completed");
    console.log("song => ",value);

    return value;
})
.then(function (value) {

    let filename = writeToFile(value);
    console.log("writing completed");

    return filename;
})
.then(function (value) {

    console.log("filname => ",value);

    let uploadedUrl = uploadToDrive(value);
    console.log("uploading completed");

    return uploadedUrl;
})
.then(function (value) {

    console.log("uploaded url => ", value);
})


