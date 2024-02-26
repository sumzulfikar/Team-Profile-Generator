//modules required for team profile generator

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//team array to include manager, engineer and intern object profiles
let team=[];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
//Command line promt to welcome users
console.log("Let us build your team!");


let prompt = inquirer.createPromptModule();
//function to check valid email format
const emailValidation=(value)=>{
    const formatValid=value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (!formatValid){
       return console.log(`\n Please enter valid email format!\n`);
    }
    else{ 
        return true;
    }

}

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
        message: "Enter email address:",
        //adding email validation 
        validate: emailValidation
    },
    {
        type: "input",
        name: "office",
        message: "Enter office number:"
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
        message: "Enter email address:",
        //adding email validation 
        validate: emailValidation
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
        message: "Enter email address:",
        //adding email validation 
        validate: emailValidation
    },
    {
        type: "input",
        name: "school",
        message: "Enter school name:"
    },

]

const teamAddQuestion=[ {
    type:"checkbox",
    name:"role",
    message:`Let us add some team members.\n What is the role of the team member you would like to add?`,
    choices:["Engineer","Intern","Quit"]
}];
//adding prompts for each user type

promptAddManager=()=>{
    prompt(managerQuestions).then(function(managerAnswers) {
            const managerObj= new Manager(managerAnswers.name,managerAnswers.id,managerAnswers.email,managerAnswers.office);
            team.push(managerObj);
            promptAddMoreTeam();
                
});}


promptAddEngineer=()=>{
    prompt(engineerQuestions).then(function(engineerAnswers){
        console.log(`Engineer${engineerAnswers}`);
        const engineerObj=new Engineer(engineerAnswers.name,engineerAnswers.id,engineerAnswers.email,engineerAnswers.github);
        team.push(engineerObj);
        promptAddMoreTeam();
       
    });   

}

promptAddIntern=()=>{
    prompt(internQuestions).then(function(internAnswers){
        console.log(`Intern${internAnswers}`);
        const internObj=new Intern(internAnswers.name,internAnswers.id,internAnswers.email,internAnswers.school);
        team.push(internObj);
        promptAddMoreTeam();
          
});
}
//Loop to enable users to add Engineers or Interns in the team
promptAddMoreTeam=()=>{
return prompt(teamAddQuestion).then(function(teamAddAnswer){
if(teamAddAnswer.role.includes("Engineer")){
    promptAddEngineer();
}
else if(teamAddAnswer.role.includes("Intern")){
    promptAddIntern();
}
else if (teamAddAnswer.role.includes("Quit")){
    writeHtml(team);
}

});
}

//Team building is completed and HTML generated
const writeHtml=(team)=>{
fs.writeFile(outputPath, render(team), function (err) {
    if (err) throw err;
    console.log('Team profile generated in the HTML!');
  });
}


promptAddManager();





