const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of question
const questions = [
    {
        type: "input",
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
        message: "Please provide test Instructions?",
    },
    {
        type: "list",
        name: "license",
        message: "Does your app have any licenses?",
        choices: [
            'MIT',
            'APACHE2.0',
            'GPL3.0',
            'ISC'
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
];

// function to write README file:
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Saved successfully!");
    });
}

// function to initialize program:
function userPrompt() {
    return inquirer.prompt(questions);
};

function init() {
    userPrompt()
    .then(function (answer) {
        const data = {
            title: answer.title,
            description: answer.description,
            installation: answer.installation,
            usage: answer.usage,
            contribution: answer.contribution,
            test: answer.test,
            license: answer.license,
            username: answer.username,
            email: answer.email
        }

        const getMarkdown = generateMarkdown(data);
        return writeToFile("README.md", getMarkdown);
});
}

// function call to initialize program:
init();