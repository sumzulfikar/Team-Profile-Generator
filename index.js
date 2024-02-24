const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

console.log("Let us build your team!");


let prompt = inquirer.createPromptModule();
 


//Questions prompted for Manager

const managerQuestions=[
    {
        type: "input",
        name: "name",
        message: "What is the name of the Team Manager?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee Id:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address:"
    },
    {
        type: "input",
        name: "office",
        message: "Enter office number:"
    },
    {
        type:"checkbox",
        name:"role",
        message:"What is the role of the team member?",
        choices:["Engineer","Intern"],
        
    },

]
//Questions prompted for Engineer
const engineerQuestions=[
    {
        type: "input",
        name: "name",
        message: "What is the name of the Engineer?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee Id:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address:"
    },
    {
        type: "input",
        name: "github",
        message: "Enter github url:"
    },

]

//Questions prompted for Engineer
const internQuestions=[
    {
        type: "input",
        name: "name",
        message: "What is the name of the Intern?"
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee Id:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter email address:"
    },
    {
        type: "input",
        name: "school",
        message: "Enter school name:"
    },

]

// Prompting the command line for team information gathering

prompt(managerQuestions).then(
        
    function (managerAnswers) {
        console.log(managerAnswers);
        const managerObj= new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.office);
        console.log(managerObj);

               if(managerAnswers.role.includes("Engineer")){
                prompt(engineerQuestions).then(function(engineerAnswers){
                    console.log(`Engineer${engineerAnswers}`);
                    const engineerObj=new Engineer(engineerAnswers.name,engineerAnswers.id,engineerAnswers.email,engineerAnswers.github);
                    console.log(engineerObj);
                });   
            }
            else if(managerAnswers.role.includes("Intern")){
                prompt(internQuestions).then(function(internAnswers){
                    console.log(`Intern${internAnswers}`);
                    const internObj=new Intern(internAnswers.name,internAnswers.id,internAnswers.email,internAnswers.school);
                    console.log(internObj);
                });   
            }
            else return ;
        });





