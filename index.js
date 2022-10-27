const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST = path.resolve(__dirname, "dist");
const distPath = path.join(DIST, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];
function runApp () {
// This function will allow me to put the team together
  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What kind of employee do you want on your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
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
// This function allows me to input the answer to given questions of the Manager
function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "What's the managers name?"
    },

    {
      type: "input",
      name: "managerId",
      message: "What's the managers employee ID number?"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "What's the managers email address?"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What's the managers office number?"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });
}
// This function allows me to input the answer to given questions of the Engineer
function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What's the engineers name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What's the engineers employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What's the engineers email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What's the engineers GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });
  }
// This function allows me to input the answer to given questions of the Intern
  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What's the interns name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What's the interns employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What's the interns email address?"
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

function htmlBuilder () {
    console.log("Team created!")
    fs.writeFileSync(distPath, generateTeam(teamArray), "UTF-8")
}

createTeam();
}

runApp();