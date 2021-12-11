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
    }
];


// Function call to initialize app
init();