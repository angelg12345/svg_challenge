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
        name: "shape_color"
    },

    {
        type: "input",
        message: "Please type in a character set of 3 letters.",
        name: "text",
    },

    {
        type: "input",
        message: "what color would you like the text to be?",
        name: "text_color"
    },
];