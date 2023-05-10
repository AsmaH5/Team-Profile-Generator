// Code to define and export the Manager class.

// Inhereting class from Employee
const Employee= require('./Employee');

//Constructor function
class Manager extends Employee {
    constructor(name, id, email, OfficeNumber){
    // Inhereting Employee constructor
    super(name, id, email);
    
    this.OfficeNumber = OfficeNumber;
    }
     // Return school from school input
     getOfficeNumber(){
        return this.OfficeNumber;
    }

     // Return role from role input
    getRole() {
        return "Manager";
    }
}

// Exporting the Engineer class
module.exports=Manager;