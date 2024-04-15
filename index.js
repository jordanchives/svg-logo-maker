// Import required modules
const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

// Array of questions for user input
const questions = [
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

// Function to asynchronously prompt user for input
async function getAnswers() {
    return inquirer.prompt(questions);
}

// Function to validate color input
function isValidColor(value) {
    let colorRegex = new RegExp(/^[a-zA-Z]+$/);
    let hexRegex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    return colorRegex.test(value) || hexRegex.test(value);
}

// Function to render the logo based on user input
function renderLogo(answers) {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeRender = '';

    // Render text SVG
    const textSvg = `<text x="150" y="105" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="80">${text}</text>`;

    // Render shape SVG based on user's choice
    switch (shape) {
        case 'circle':
            const circle = new Circle(shapeColor);
            shapeRender = circle.render();
            break;
        case 'square':
            const square = new Square(shapeColor);
            shapeRender = square.render();
            break;
        case 'triangle':
            const triangle = new Triangle(shapeColor);
            shapeRender = triangle.render();
            break;
    }

    // Combine text and shape SVG into final logo SVG
    const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
    ${textSvg}
</svg>`;

    return svg;
}

// Prompt user for input and generate logo
getAnswers().then((answers) => {
    const svg = renderLogo(answers);
    const path = `./output/logo.svg`;

    // Write logo SVG to file
    fs.writeFile(path, svg, (err) => {
        if (err) {
            console.error('Error saving file: ', err);
        } else {
            console.log(`Generated logo.svg`);
        }
    });
});
