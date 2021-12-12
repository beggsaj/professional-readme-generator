// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')

//array of questions for user input
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
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('enter your username')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('enter your email')
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
                console.log('provide a description')
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
                console.log('enter installation instructions')
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
                console.log('enter usage examples')
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
                console.log('list relevant collaborators')
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'liscense',
        message: 'Please select the applicable liscense:',
        choices: ['agpl-3.0','gpl-3.0','lgpl-3.0','mpl-2.0','Apache-2.0','MIT','BSL-1.0','Unlicense'],
        validate: liscenseInput => {
            if (liscenseInput) {
                return true;
            } else {
                console.log('please select correct liscense')
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
                console.log('enter relevant features')
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
                console.log('enter guidelines for contributing')
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
                console.log('enter tests')
                return false;
            }
        }
    },
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README complete!')
    })
}

// function to generate readme data
function generateReadMe(data) {
    return `
# ${data.title}

## Licensing:
[![liscense](https://img.shields.io/badge/license-${data.liscense}-green)](https://shields.io)

## Description: 
${data.description}

## Table of Contents: 
* [Installation](#install)
* [Usage](#usage)
* [Credits](#credits)
* [Liscense](#liscense)
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation: 
${data.install}

## Usage: 
${data.usage}

## Credits: 
${data.credits}

## Liscense: 
This application is covered under the ${data.liscense} liscense.

## Features: 
${data.features}

## Contributing: 
${data.contributing}

## Tests: 
${data.tests}

## Questions:

If you have additional questions please reach out to me using one of the methods below.

* Github: https://github.com/${data.github}
* Email: ${data.email}
    `
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile('README.md', generateReadMe(userInput))
        })
}

// Function call to initialize app
init();