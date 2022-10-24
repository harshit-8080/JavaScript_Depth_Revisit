function customFetch(callback){

    console.log("starting downloading");

    setTimeout(() => {

        let song = "excuses";

        console.log("downloaded song -> ", song);
       
        console.log("downloading completed");

        callback(song);

    }, 3000);
}

customFetch(function(song){

    console.log("open you folder to access = ", song);
});