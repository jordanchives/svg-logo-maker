// Import the parent Shape class
const Shape = require('./shape.js');

// Define the Square class, which extends the Shape class
class Square extends Shape {
  // Constructor to initialize properties
  constructor(color) {
    super(color); // Call the constructor of the parent class
  }

  // Method to render the square SVG
  render() {
    // Generate SVG markup for the square
    const svg = `<rect x="50" y="0" width="200" height="200" fill="${this.color}" />`;
    return svg;
  }
}

// Export the Square class
module.exports = Square;
