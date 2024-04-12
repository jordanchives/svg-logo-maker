const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

const questions = [
    {
        type: 'input',
        name: 'size',
        message: 'What size would you like your logo to be?'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your logo text to be? (keyword or hex)'
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
        message: 'What is the color of the shape? (keyword or hex)'
    },
];

const circle = new Circle('red', 300);
const square = new Square('red', 300);
const triangle = new Triangle('red', 300);

console.log(circle.render());
console.log(square.render());
console.log(triangle.render());

// const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
// ${circle.render()}
// ${square.render()}
// ${triangle.render()}
// </svg>`;

const svg = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${circle.render()}
</svg>`;

console.log(svg);