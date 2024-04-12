const Shape = require('./shape.js');

class Circle extends Shape {
  constructor(color, size) {
    super(color, size);
  }

  render() {
    console.log('Circle render');
    const svg = `<circle cx="${(this.size/2)}" cy="${(this.size/2)}" r="${(this.size/2)}" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Circle;