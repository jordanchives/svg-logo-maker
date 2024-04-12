class Shape {
    constructor(color, size) {
        this.color = color;
        this.size = size;
    }

    render() {
        throw new Error('render method must be implemented in subclass');
    }
}

module.exports = Shape;