const Shape = require('./Shape');

class Square extends Shape {
  constructor(color, size) {
    super(color, size);
  }

  render() {
    console.log('Square render');
    const svg = `<rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    return svg;
  }
}

module.exports = Square;