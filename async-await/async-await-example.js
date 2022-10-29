async function song() {
    
 console.log("song downloading started");

 return "excuses";

}

async function writingToFile(){
    
    let song1 = await song();

    console.log("Song downloaded => ", song1);

    console.log("writing to file is started");

    return song1 + ".mp3";
}

async function uploadingToDrive() {
    
    let fileName = await writingToFile();

    console.log("writing to file is done => ", fileName);

    console.log(("uploading to drive started"));
    return "www." +fileName + "/drive.google.com";

}

let newLink = uploadingToDrive();
newLink.then((value)=>{
    
    console.log("uploading is done");

    console.log("song uploaded to => ", value);
})
