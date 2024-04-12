class Shape {
    constructor(color) {
        this.color = color;
    }

    render() {
        throw new Error('render method must be implemented in subclass');
    }
}