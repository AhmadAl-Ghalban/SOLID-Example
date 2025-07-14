// Definition:

// Software entities (classes, modules, functions) should be open for extension but closed for modification.

// This means you should be able to extend the behavior of a class without modifying its existing code.
// This helps avoid breaking existing functionality when adding new features.
// ❌ Bad Example — Violates OCP:
class Shape {
    area() {
        // Logic to calculate area of shape
    }
}

class Circle extends Shape {
    area() {
        // Logic to calculate area of circle
    }
}

class Square extends Shape {
    area() {
        // Logic to calculate area of square
    }
}

// This design requires modifying the Shape class whenever a new shape is added, violating OCP.

// ✅ Good Example — Follows OCP:
class Shape {
    area() {
        throw new Error("This method should be overridden");
    }
}

class Circle extends Shape {
    area() {
        // Logic to calculate area of circle
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Square extends Shape {
    area() {
        // Logic to calculate area of square
        return this.side * this.side;
    }
}

// This design allows adding new shapes without modifying the existing Shape class, adhering to OCP.

// Usage
const shapes = [new Circle(), new Square()];
shapes.forEach(shape => {
    console.log(shape.area());
});
// This allows for easy extension of the Shape class without modifying its existing code, adhering to the Open/Closed Principle.
// This design allows for easy extension of the Shape class without modifying its existing code, adhering to the Open/Closed Principle. 

