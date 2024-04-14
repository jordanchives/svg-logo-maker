// Import the parent Shape class
const Shape = require('./shape.js');

// Define the Square class, which extends the Shape class
class Square extends Shape {
  // Constructor to initialize properties
  constructor(color, size) {
    super(color, size); // Call the constructor of the parent class
  }

  // Method to render the square SVG
  render() {
    console.log('Square render');
    // Generate SVG markup for the square
    const svg = `<rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    return svg;
  }
}

// Export the Square class
module.exports = Square;
