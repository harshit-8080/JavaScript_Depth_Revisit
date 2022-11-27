const Team = function(id,name) {
    
    this.id = id;
    this.name = name;
}

Team.prototype.getTeam = function(){
    
    console.log("Team Id = ", this.id);
    console.log("Team Name = ", this.name);
}

const India = new Team(101,"India");
const Australia = new Team(102,"Australia");
const England = new Team(103,"England");
const Pakistan = new Team(104,"Pakistan");



India.getTeam();
Australia.getTeam();
England.getTeam();
Pakistan.getTeam();