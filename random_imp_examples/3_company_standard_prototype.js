const Person = function(fname,lname) {
    
    this.FirstName = fname;
    this.lastName = lname;
}

Person.prototype.getDetails = function(){

    console.log("following are the details for given employee");

    console.log("Emp Id = ", this.id);

    console.log("Emp FirstName = ", this.FirstName);

    console.log("Emp LastName = ", this.lastName);

    console.log("Emp Salary = ", this.salary);
    
}


const Employee = function(id,fname,lname,salary){

    this.id = id;
    this.salary = salary;
    Person.call(this,fname,lname);
}

Employee.prototype = Object.create(Person.prototype);


const emp1 = new Employee(101,"Harshit","Raj",100000);


emp1.getDetails();

