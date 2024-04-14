// Import the parent Shape class
const Shape = require('./shape.js');

// Define the Triangle class, which extends the Shape class
class Triangle extends Shape {
  // Constructor to initialize properties
  constructor(color, size) {
    super(color, size); // Call the constructor of the parent class
  }

  // Method to render the triangle SVG
  render() {
    console.log('Triangle render');
    // Generate SVG markup for the triangle
    const svg = `<polygon points="${this.size/2},0 0,${this.size} ${this.size},${this.size}" fill="${this.color}" />`;
    return svg;
  }
}

// Export the Triangle class
module.exports = Triangle;
