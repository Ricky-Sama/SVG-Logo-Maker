// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./utils/shapes.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "characters",
        message: "TEXT: Enter up to 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT-COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shape-color",
        message: "SHAPE-COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
   


];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//       if (err) {
//         console.error('Error writing to file:', err);
//       } else {
//         console.log(`${fileName} has been created successfully.`);
//       }
//     });
//   }

// // TODO: Create a function to initialize app
// function init() {
//     inquirer
//       .prompt(questions)
//       .then((responses) => {
//         console.log("Creating README.md file...");
//         writeToFile('./utils/README.md', generateMarkdown({...responses}));
//       });
//   }

// Function call to initialize app
init();