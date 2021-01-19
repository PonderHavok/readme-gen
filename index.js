const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user

const questions = [
    {
        type:'input',
        message:'Enter the project title.',
        name:'title',
    },
    {
        type:'input',
        message:'Enter your email address.',
        name:'email',
    },
    {
        type:'input',
        message:'Enter the description of your project.',
        name:'description',
    },
    {
        type: "input",
        name: "picturefile",
        message: "Enter the pathway for a screenshot or video of your project.",
    },
    {
        type:'input',
        message:'Enter all installation instructions.',
        name:'instructions',
    },
    {
        type:'list',
        message:'Please select your license.',
        name:'license',
        choices:[
            "MIT license",
            "Apache License 2.0",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "Common Development and Distribution License",
            "Creative Commons License",
            "Eclipse Public License",
            "GPL",
            "LGPL",
            "Mozilla Public License 2.0",
            new inquirer.Separator( "-- End of List --" )
        ],
    },
    {
        type:'input',
        message:'Enter your Github Username.',
        name:'github',
    },
    {
        type:'input',
        message:'Please enter any contribution guidelines or other related information.',
        name:'contribution',
    },
    {
        type:'input',
        message:'Please enter any testing information.',
        name:'tests'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('File generated successfully!'));
}

// function to initialize program
function init() {

    inquirer
    .prompt(
        questions
    )
    .then((data) => {
        fileName = 'README.md';
        writeToFile(fileName, generateMarkdown(data));
    })
}

// function call to initialize program
init();