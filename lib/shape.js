// Define the Shape class as a parent class for different shapes
class Shape {
    // Constructor to initialize properties
    constructor(color, size) {
        this.color = color; // Color of the shape
        this.size = size; // Size of the shape (e.g., diameter for Circle, side length for Square)
    }

    // Method to render the shape (to be implemented by subclasses)
    render() {
        // Throw an error if this method is called directly on the Shape class
        throw new Error('render method must be implemented in subclass');
    }
}

// Export the Shape class to make it accessible from other files
module.exports = Shape;
