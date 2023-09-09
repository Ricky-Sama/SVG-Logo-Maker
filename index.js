// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "characters",
        message: "TEXT: Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "text_color",
        message: "TEXT-COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        name: "shape_color",
        message: "SHAPE-COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
   


];


function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Generated logo.svg');
      }
    });
  }

//function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
      });
  }

//function call to initialize app
init();