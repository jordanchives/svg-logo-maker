// Import the parent Shape class
const Shape = require('./shape.js');

// Define the Circle class, which extends the Shape class
class Circle extends Shape {
  // Constructor to initialize properties
  constructor(color, size) {
    super(color, size); // Call the constructor of the parent class
  }

  // Method to render the circle SVG
  render() {
    console.log('Circle render');
    // Generate SVG markup for the circle
    const svg = `<circle cx="${(this.size/2)}" cy="${(this.size/2)}" r="${(this.size/2)}" fill="${this.color}" />`;
    return svg;
  }
}

// Export the Circle class
module.exports = Circle;
