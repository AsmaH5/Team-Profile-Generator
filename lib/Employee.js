// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Return name from name input
    getName() {
        return this.name;
    }

    // Return ID from ID input
    getId() {
        return this.id;
    }

    // Return email from email input
    getEmail() {
        return this.email;
    }
}
// Exporting the Employee class
module.exports=Employee;