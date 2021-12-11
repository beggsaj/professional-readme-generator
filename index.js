// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is the name of your repository?',
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
        name: 'github',
        message: 'What is your github username?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your repository:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials used:',
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'liscense',
        message: 'Please select the applicable liscense:',
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense'],
        validate: liscenseInput => {
            if (liscenseInput) {
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
        validate: badgesInput => {
            if (badgesInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'features',
        message: 'Please list any relevant features here:',
        validate: featuresInput => {
            if (featuresInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Guidelines for contributing:',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide tests for your application and how to run them:',
        validate: testsInput => {
            if (testsInput) {
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
# ${data.title}

## Description: 
${data.description}

## Table of Contents: 
* [Installation](#install)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

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

##Questions:

If you have additional questions please reach out to me using one of the methods below.

* Github: ${data.github} https://github.com/${data.github}
* Email: ${data.email}
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