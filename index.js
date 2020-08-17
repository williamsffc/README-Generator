const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");


// array of questions for user
// const questions = [
//     {
//         name: "title",
//         message: "What is your project's title?",
//     },
// ];

inquirer
    .prompt([
        {
            name: "title",
            message: "What is your project's title?",
        },
        {
            type: "input",
            name: "description",
            message: "Can you provide a description of your project?",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation structures?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?",
        },
        {
            type: "input",
            name: "contribution",
            message: "Are there any contribution guidelines?",
        },
        {
            type: "input",
            name: "test",
            message: "Test Instructions?",
        },
        {
            type: "checkbox",
            name: "licenses",
            message: "Does your app have any licenses?",
            choices: [
                'ISC', 'MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'
            ]
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What's your email address?",
        },
    ])
    .then(answers => {
        console.log("Answer: ", answers);
    });


// function to write README file:
function writeToFile(fileName, data) {
}

// function to initialize program:
// function init() {

// }

// function call to initialize program:
// init();
