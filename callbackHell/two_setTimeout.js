setTimeout(() => {
    
    console.log("inside first Set Timeout");
    let song = "song.mp3"
    setInterval(function fun() {

        console.log(song);
        
    },1000);

}, 2000);