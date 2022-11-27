const Person = function(fname,lname) {
    
    this.FirstName = fname;
    this.lastName = lname;
}

Person.prototype.getName = function(){

    console.log("Emp FirstName = ", this.FirstName);

    console.log("Emp LastName = ", this.lastName);
}


const Employee = function(id,fname,lname,salary){

    this.id = id;
    this.salary = salary;
    Person.call(this,fname,lname);
}


Employee.prototype.getDetails = function(){
    console.log("following are the details for given employee");

    console.log("Emp Id = ", this.id);
    this.getName();
    console.log("Emp Salary = ", this.salary);

}

Employee.prototype.getName = Person.prototype.getName;

const emp1 = new Employee(101,"Harshit","Raj",100000);

// console.log(emp1.__proto__);

emp1.getDetails();

