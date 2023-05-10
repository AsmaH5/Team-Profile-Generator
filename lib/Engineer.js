// Code to define and export the Engineer class.

// Inhereting class from Employee
const Employee= require('./Employee');

//Constructor function
class Engineer extends Employee {
    constructor(name, id, email, github){
    // Inhereting Employee constructor
    super(name, id, email);
    this.github = github;
    }
     // Return github from github input
     getGithub(){
        return this.github;
    }

     // Return role from role input
    getRole() {
        return "Engineer";
    }
}

// Exporting the Engineer class
module.exports=Engineer;
