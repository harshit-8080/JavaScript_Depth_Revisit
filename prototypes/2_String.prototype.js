String.prototype.printWithLastName = function printWithLastName(lastName) {
    
    let updatedName = this.toString() + lastName;
    return updatedName;
}


let x = "Harshit";

let fullName = x.printWithLastName(" Raj");



console.log(fullName);