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
        name: 'description',
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
        name: 'toc',
        message: 'toc',
        validate: tocInput => {
            if (tocInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
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
        name: 'usage',
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
        name: 'credits',
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
        name: 'liscense',
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
        name: 'badges',
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
        name: 'features',
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
        name: 'contributing',
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
        name: 'tests',
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
    return `
# Title: 
${data.title}

## Descritption: 
${data.description}

## Table of Contents: 
${data.toc}

## Installation: 
${data.install}

## Usage: 
${data.usage}

## Credits: 
${data.credits}

## Liscense: 
${data.liscense}

## Badges: 
${data.badges}

## Features: 
${data.features}

## Contributing: 
${data.contributing}

## Tests: 
${data.tests}
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