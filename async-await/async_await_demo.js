function fetchData(url) {

    return new Promise(function (resolve, reject) {
        
        console.log("downloaded started");

        setTimeout(function(){

            let song = "excuses_song";
            resolve(song);

        },30000);
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


async function processing(){

    console.log("helloo 0");
    let song = await fetchData(); // return resolved data
    console.log("helloo 1 ");
    let filename = await writeToFile(song); // return resolved data

    console.log("helloo 2");
    let link = await uploadToDrive(filename); // return resolved data

    console.log(link);

    return true; 
}

// this async function it self return a promise

processing();
console.log("end");

/**

helloo 0
downloaded started
end
helloo 1 
Writing started
helloo 2
uploading started
excuses_song.mp3.drive.google.com

 */
