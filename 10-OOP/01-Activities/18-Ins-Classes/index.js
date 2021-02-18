// CLASSES
class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`AREA ${this.area}`);
    console.log(`PERIMETER ${this.perimeter}`);
  }

  printArea() {
    console.log(`AREA ${this.area}`);
  }

  printPerimeter() {
    console.log(`PERIMETER ${this.perimeter}`);
  }
}

const shape = new Shape(25, 25);
console.log('shape:', shape);
const shape2 = new Shape(75, 75);
console.log('shape2:', shape2);

// shape.printInfo();
// shape.printArea();
// shape.printPerimeter();
