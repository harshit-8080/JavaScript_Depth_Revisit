const obj = {

    name : "harshit",
    age : 100,
    display: function fun() {
        console.log(this.name);
    },
    show:()=>{
        console.log(this.name);
    },
    
    get:function() {
        // console.log(this);
        setTimeout(()=>{
            console.log(this.name);
        },0)
    },
    pet:function() {
        // console.log(this);
        setTimeout(function(){
            console.log(this.name);
        },0)
    },

}

obj.display();
obj.show();
obj.get();
obj.pet();  // doubt