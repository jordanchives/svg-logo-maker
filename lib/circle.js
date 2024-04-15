// Import the parent Shape class
const Shape = require('./shape.js');

// Define the Circle class, which extends the Shape class
class Circle extends Shape {
  // Constructor to initialize properties
  constructor(color) {
    super(color); // Call the constructor of the parent class
  }

  // Method to render the circle SVG
  render() {
    // Generate SVG markup for the circle
    const svg = `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    return svg;
  }
}

// Export the Circle class
module.exports = Circle;
