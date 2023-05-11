// Code to define and export the Intern class.

// Inhereting class from Employee
const Employee= require('./Employee');

//Constructor function
class Intern extends Employee {
    constructor(name, id, email, school){
    // Inhereting Employee constructor
    super(name, id, email);
    
    this.school = school;
    }
     // Return school from school input
     getSchool(){
        return this.school;
    }

     // Return role from role input
    getRole() {
        return "Intern";
    }
}

// Exporting the Engineer class
module.exports=Intern;
