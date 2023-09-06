// required packages
const inquirer = require('inquirer')
const fs = require('fs')
const generateLogo = require('./utils/generateLogo')
// prompted questions for logo creation
const questions = [
    {
        type: "list",
        message: "what shape would you like your svg?",
        name: "shape",
        choices: [
            "Triangle",
            "Square",
            "circle"
        ]
    },

    {
        type: "input",
        message: "What color would you like the shape to be (Or a hexadecimal number)?",
        name: "shapeColor"
    },

    {
        type: "input",
        message: "Please type in a set of 3 letters.",
        name: "text",
    },

    {
        type: "input",
        message: "what color would you like the text?",
        name: "textColor"
    },
];

// function to prompt user
function promptuser () {
    return inquirer.prompt(questions);
}
// function to write the file using data from user
function writeToFile(data) {
    const content = generateLogo(data);
    fs.writeFile('logo.svg', content, function(error){
        if (error) {
            return console.log(error);
        }

        console.log('generated logo.svg')
    });
}

function init() {
    promptuser()
   .then(function(data){
        const file = 'logo.svg';
        writeToFile(data);
    })
    // catch errors
    .catch(function(error) {
        console.error('error prompting user:', error)
    });
}

init();