// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project"
    },
    {
        type: "input",
        name: "description",
        message: "describe your project"
    },
    {
        type: "input",
        name: "install",
        message: "how do you install your app"
    },
    {
        type: "input",
        name: "usage",
        message: "how will you use this app"
    },
    {
        type: "input",
        name: "contribution",
        message: "how will you contribute on this project"
    },
    {
        type: "input",
        name: "test",
        message: "can you test the project"
    },
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    //  WHEN I enter my email address
    {
        type: "input",
        name: "questions",
        message: "can you add your github name and email address"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        writeToFile('generatedREADME.md', generateMarkdown({...data}))
    })
}

// Function call to initialize app
init();
