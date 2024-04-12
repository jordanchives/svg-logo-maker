const Shape = require('./shape.js');

class Triangle extends Shape {
  constructor(color, size) {
    super(color, size);
  }

  //render svg for triangle
  render() {
    console.log('Triangle render');
    const svg = `<polygon points="${this.size/2},0 0,${this.size} ${this.size},${this.size}" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Triangle;