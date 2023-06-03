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
        message: "Please type in a character set of 3 letters.",
        name: "text",
    },

    {
        type: "input",
        message: "what color would you like the text to be?",
        name: "textColor"
    },
];
//svg file is being created
function writeToFile(filename, data) {
    var content = generateLogo(data);
    fs.writeFile(filename, content, function(error){
        if (error) {
            return console.log(error);
        }

        console.log('generated logo.svg')
    })
}

function init() {
    inquirer.prompt(questions).then(function(data){
        var file = 'logo.svg';
        writeToFile(file, data);
    });
}

init();