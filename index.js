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
    {
        type: 'input',
        name: 'filename',
        message: 'What would you like to name your file?',
        default: 'logo'
    }
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
    const { size, text, textColor, shape, shapeColor } = answers;
    const fontSize = Math.round(size * 0.2);
    let shapeRender = '';

    // Render text SVG
    console.log('Rendering text...');
    const textSvg = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text}</text>`;

    // Render shape SVG based on user's choice
    console.log('Rendering shape...');
    switch (shape) {
        case 'circle':
            const circle = new Circle(shapeColor, size);
            shapeRender = circle.render();
            break;
        case 'square':
            const square = new Square(shapeColor, size);
            shapeRender = square.render();
            break;
        case 'triangle':
            const triangle = new Triangle(shapeColor, size);
            shapeRender = triangle.render();
            break;
    }

    // Combine text and shape SVG into final logo SVG
    console.log('Rendering logo...');
    const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
    ${textSvg}
</svg>`;

    return svg;
}

// Prompt user for input and generate logo
getAnswers().then((answers) => {
    const svg = renderLogo(answers);
    const { filename } = answers;
    const path = `./output/${filename}.svg`;

    // Write logo SVG to file
    fs.writeFile(path, svg, (err) => {
        if (err) {
            console.error('Error saving file: ', err);
        } else {
            console.log(`Logo saved to ${path}`);
        }
    });
});
