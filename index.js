const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const questions = [
    {
        type: 'input',
        name: 'size',
        message: 'What size would you like your logo to be?',
        validate: (value) => Number.isInteger(Number(value)) ? true : 'Please enter a valid number.'
        
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo?',
        validate: (value) => value.length <= 3 ? true : 'Text must be up to 3 characters long.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your logo text to be? (keyword or hex)',
        validate: (value) => isValidColor(value) ? true : 'Please enter a valid color or 6-character hex value.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (keyword or hex)',
        validate: (value) => isValidColor(value) ? true : 'Please enter a valid color or 6-character hex value.'
    },
];

function isValidColor(value) {
    let colorRegex = new RegExp(/^[a-zA-Z]+$/);
    let hexRegex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    return colorRegex.test(value) || hexRegex.test(value);
}

async function getAnswers() {
    return inquirer.prompt(questions);
}

function renderLogo(answers) {
    console.log('Rendering logo...');
}

// const circle = new Circle('red', 300);
// const square = new Square('red', 300);
// const triangle = new Triangle('red', 300);

// console.log(circle.render());
// console.log(square.render());
// console.log(triangle.render());

// const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
// ${circle.render()}
// ${square.render()}
// ${triangle.render()}
// </svg>`;

// const svg = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
//     ${triangle.render()}
// </svg>`;

getAnswers().then(answers => {
    console.log(answers);
    renderLogo(answers);
});
