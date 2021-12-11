// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your repository named?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('enter repo name')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'details',
        message: 'provide your project details',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'TOC',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Liscense',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Badges',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Features',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'install',
        validate: detailsInput => {
            if (detailsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('test')
    })
}

// Created function to generate readme data
function generateReadMe(data) {
    return `${data.title}

    ## Details: 
    ${data.details}
    `
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('README.md', generateReadMe(userInput))
        })
}

// Function call to initialize app
init();