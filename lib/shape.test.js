const Shape = require('./shape');
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

describe('Shapes', () => {
    describe('Shape class', () => {
        it('render method throws an error', () => {
          const shape = new Shape('red', 10);
          expect(() => {
            shape.render();
          }).toThrow('render method must be implemented in subclass');
        });
      });

    describe('Circle class', () => {
        it('is a subclass of Shape', () => {
            expect(Circle.prototype instanceof Shape).toBe(true);
        });

        it('creates Circle instance with correct properties', () => {
            const circle = new Circle('red', 10);
            expect(circle.color).toBe('red');
            expect(circle.size).toBe(10);
        });

        it('render method returns correct SVG', () => {
            const circle = new Circle('red', 10);
            const svg = circle.render();
            expect(svg).toContain('<circle');
            expect(svg).toContain('cx="5" cy="5" r="5"');
            expect(svg).toContain('fill="red"');
        });
    });

    describe('Square class', () => {
        it('is a subclass of Shape', () => {
            expect(Square.prototype instanceof Shape).toBe(true);
        });

        it('creates Square instance with correct properties', () => {
            const square = new Square('blue', 10);
            expect(square.color).toBe('blue');
            expect(square.size).toBe(10);
        });

        it('render method returns correct SVG', () => {
            const square = new Square('blue', 10);
            const svg = square.render();
            expect(svg).toContain('<rect');
            expect(svg).toContain('width="10" height="10"');
            expect(svg).toContain('fill="blue"');
        });
    });

    describe('Triangle class', () => {
        it('should be a subclass of Shape', () => {
            expect(Triangle.prototype instanceof Shape).toBe(true);
        });

        it('creates Triangle instance with correct properties', () => {
            const triangle = new Triangle('green', 10);
            expect(triangle.color).toBe('green');
            expect(triangle.size).toBe(10);
        });

        it('render method returns correct SVG', () => {
            const triangle = new Triangle('green', 10);
            const svg = triangle.render();
            expect(svg).toContain('<polygon');
            expect(svg).toContain('points="5,0 0,10 10,10"');
            expect(svg).toContain('fill="green"');
        });
    });
});