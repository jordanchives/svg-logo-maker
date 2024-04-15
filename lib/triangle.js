// Import the parent Shape class
const Shape = require('./shape.js');

// Define the Triangle class, which extends the Shape class
class Triangle extends Shape {
  // Constructor to initialize properties
  constructor(color) {
    super(color); // Call the constructor of the parent class
  }

  // Method to render the triangle SVG
  render() {
    // Generate SVG markup for the triangle
    const svg = `<polygon points="150,0 50,200 250,200" fill="${this.color}" />`;
    return svg;
  }
}

// Export the Triangle class
module.exports = Triangle;
