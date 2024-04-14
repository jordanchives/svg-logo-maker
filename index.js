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
    {
        type: 'input',
        name: 'filename',
        message: 'What would you like to name your file?',
        default: 'logo'
    }
];

async function getAnswers() {
    return inquirer.prompt(questions);
}

function isValidColor(value) {
    let colorRegex = new RegExp(/^[a-zA-Z]+$/);
    let hexRegex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    return colorRegex.test(value) || hexRegex.test(value);
}

function renderLogo(answers) {
    const { size, text, textColor, shape, shapeColor } = answers;
    const fontSize = Math.round(size * 0.2);
    let shapeRender = '';

    console.log('Rendering text...');
    const textSvg = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text}</text>`;

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

    console.log('Rendering logo...');
    const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    ${shapeRender}
    ${textSvg}
</svg>`;

    return svg;
}

getAnswers().then((answers) => {
    const svg = renderLogo(answers);
    const { filename } = answers;
    const path = `./output/${filename}.svg`;

    fs.writeFile(path, svg, (err) => {
        if (err) {
            console.error('Error saving file: ', err);
        } else {
            console.log(`Logo saved to ${path}`);
        }
    });
});
