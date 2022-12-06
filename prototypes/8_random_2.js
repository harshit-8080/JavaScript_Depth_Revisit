function Person(fname,lname) {
    
    this.fname = fname;
    this.lname = lname; 

    
}
Person.prototype.getFullName = function(){

    console.log(`Full Name = ${this.fname + " "+ this.lname}`);
}


function Employee(empId,fname,lname,salary) {
    
    this.empId = empId;
    this.salary = salary; 
    Person.call(this,fname,lname);

    this.getEmployeeDetail = function(){

        console.log(`Employee ID = ${this.empId }`);

        this.getFullName();

        console.log(`Employee Salary = ${this.salary}`);
        
    }
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee(101,"Harshit","Raj",1000);

console.log(emp);

emp.getEmployeeDetail();