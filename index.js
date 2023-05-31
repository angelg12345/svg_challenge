// required packages
const inquirer = require('inquirer')
const fs = require('fs')
const generateLogo = require('./utils/generateLogo')

const questions = [
    {
        type: "list",
        message: "what shape svg?",
        name: "shape",
        choices: [
            "Triangle",
            "Square",
            "circle"
        ]
    },
]