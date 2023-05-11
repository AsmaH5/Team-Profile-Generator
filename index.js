// Node Modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateHTML = require('./src/page-template.js');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

// Generate HTML
const generateTeam = require("./src/page-template.js");

// Team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");



teamArray = [];


// // Class containing all questions

function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "I have completed the input of my team information."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
// OOP Functions

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What is the manager's employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What is the manager's email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the manager's office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team


function htmlBuilder () {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();


// class Prompt{
//     constructor() {
//         this.teamArray = [];
//     }

//     /**
//      * @returns the array of all Employee objects
//      */

//     getTeamArray() {
//         return this.teamArray;
//     }

// // Questions
// questions() {
//     inquirer.prompt(
//     {
//      type: 'list',
//      name: 'employeeType',
//      message: "Which type of employee would you like to add to the team?",
//      choices: ['Manager', 'Engineer', 'Intern', 'I have completed the input of my team information.']
//     })
//     .then(({employeeType}) => {
//         if(employeeType === 'Manager'){
//         inquirer.prompt([
//     {
//      type: 'input',
//      name: 'name',
//      message: "What is the manager's name?",
//      validate: nameInput => {
//          if (nameInput) {
//              return true;
//          } else {
//              console.log("Please enter the manager's name!");
//              return false;
//          }
//      }
//     },
//     {
//         type: 'number',
//         name: 'id',
//         message: "What is the manager's employee ID number?",
//         validate: idInput => {
//             if (idInput) {
//                 return true;
//             } else {
//                 console.log("Please enter a correct answer, the employee id should be a number!");
//                 return false;
//             }
//         } 
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: "What is the manager's email address?",
//         validate: emailInput => {
//             if (emailInput) {
//                 return true;
//             } else {
//                 console.log("Please enter the correct manager's email!");
//                 return false;
//             }
//         }
//     },
//     {
//         type: 'number',
//         name: 'officeNumber',
//         message: "What is the manager's office number?",
//         validate: officeNumberInput => {
//             if (officeNumberInput) {
//                 return true;
//             } else {
//                 console.log("Please enter a correct answer, the office number should be a number!");
//                 return false;
//             }
//         }
//     },
//     ])

//     // Adds Manager data into team
//     .then( (templateData) => {
//         const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
//         this.teamArray.push(newManager);
        
//         this.questions();
//     });

//     } else if (employeeType === 'Engineer') {
//             inquirer.prompt([
//                     {
//                      type: 'input',
//                      name: 'name',
//                      message: "What is the engineer's name?",
//                      validate: nameInput => {
//                         if (nameInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the engineer's name!");
//                             return false;
//                         }
//                     }
//                     },
//                     {
//                      type: 'number',
//                      name: 'id',
//                      message: "What is the engineer's employee ID number?",
//                      validate: idInput => {
//                         if (idInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter a correct answer, the employee id should be a number!");
//                             return false;
//                         }
//                     } 
//                     },
//                     {
//                      type: 'input',
//                      name: 'email',
//                      message: "What is the engineer's email address?",
//                      validate: emailInput => {
//                         if (emailInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the correct engineer's email!");
//                             return false;
//                         }
//                     }
//                     },
//                     {
//                      type: 'input',
//                      name: 'github',
//                      message: "What is the engineer's github username?",
//                      validate: githubInput => {
//                         if (githubInput) {
//                             return true;
//                         } else {
//                             console.log("Please enter the correct engineer's github username!");
//                             return false;
//                         }
//                     }  
//                     }

//                 // Adds Engineer data into team
//                 ]).then( templateData => {
//                     const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
//                     this.teamArray.push(newEngineer);
            
//                     this.questions();
//                 });

//         } else if (employeeType === 'Intern') {
//             inquirer.prompt([
//                 {
//                  type: 'input',
//                  name: 'name',
//                  message: "What is the intern's name?",
//                  validate: nameInput => {
//                     if (nameInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the intern's name!");
//                         return false;
//                     }
//                 }
//                 },
//                 {
//                  type: 'number',
//                  name: 'id',
//                  message: "What is the intern's employee ID number?",
//                  validate: idInput => {
//                     if (idInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter a correct answer, the employee id should be a number!");
//                         return false;
//                     }
//                 } 
//                 },
//                 {
//                  type: 'input',
//                  name: 'email',
//                  message: "What is the intern's email address?",
//                  validate: emailInput => {
//                     if (emailInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the correct intern's email!");
//                         return false;
//                     }
//                 }
//                 },
//                 {
//                  type: 'input',
//                  name: 'school',
//                  message: "What is the intern's school name?",
//                  validate: schoolInput => {
//                     if (schoolInput) {
//                         return true;
//                     } else {
//                         console.log("Please enter the correct intern school's name!");
//                         return false;
//                     }
//                 }  
//                 }

//             // Adds Intern data into team
//             ]).then( templateData => {
//                 const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
//                 this.teamArray.push(newIntern);
                
//                 this.questions();
//             });

//         } else if (employeeType === 'I finished entering my team info') {
//             //Rendering the HTML file.
//             const pagehtml = generateHTML(this.getTeamArray());
//             fs.writeFile('./index.html', pagehtml, err => {
//                 if (err) throw new Error(err);

//                 console.log('Team HTML file generated successfully!');
//             });
//         }
//     });

// }
// };





// // // TODO: Write Code to gather information about the development team members, and 
// const prompt = new Prompt();
// prompt.questions();

// module.exports = Prompt;
  
// //     const outputPath = path.join(__dirname, 'output', 'team.html');
// //     fs.writeFileSync(outputPath, html);
  
// //     console.log('Team HTML file generated successfully!');
// //   }
  
  
// //   // When the user finishes building the team
// //   generateTeamHTML(team);