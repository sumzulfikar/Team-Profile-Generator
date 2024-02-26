![Static Badge](https://img.shields.io/badge/NPM-6.5.0-blue)

# Team Profile Generator
### Description
Enabling Manager users  to generate a webpage that displays their team's basic information so that they have a quick access to the team member's emails and GitHub profiles.

### NPM packages installed
-  inquirer@6.5.0
-  jest@29.7.0

### Installation
 1. Download Node from here [Node.js] (https://nodejs.org/en)
 2. From VS code right click inside your project and select Open in integrated terminal
 3. Type npm init
 4. Next type npm i inquirer@6.5.0
 5. Once installed in the terminal type in: node index.js

 ### Step by step guide to building team profile
 User will be prompted with following questions:
 - Name of the Team manager
 - Employee id
 - A valid Email address
 - Office Number
Next, the User will be prompted to add either an Engineer or Intern in their team
- Name and Employee ID of Engineer or Intern will be prompted according to users choice before
- For Engineer github url and for Intern name of college will be prompted
- The user will be prompted the choices until they choose Quit
- Once user quits an HTML page is generated with all the Team Member details entered by user.
- Below is a![screenshot of webpage](https://github.com/sumzulfikar/Team-Profile-Generator/assets/150956638/e19f01df-9184-43c7-9da5-b44d2e703447)

  ### Test
  To Test
  - Install Jest  by running npm install --save-dev jest
  - Once installed go to the folder __tests__
  - In the file enployee run npm run test
  - The test suite results will show up
  - All tests should pass.
