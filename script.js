//1
class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    get_circumference() {
        return 2 * Math.PI * this.radius;
    }

    static get_circumference_by_radius(radius) {
        return 2 * Math.PI * radius;
    }

    copy() {
        return new Circle(this.x, this.y, this.radius);
    }

    is_point_inside(x, y) {
        const distance = Math.sqrt((x - this.x)**2 + (y - this.y)**2);
        return distance <= this.radius;
    }

    toString() {
        return `Circle with center at (${this.x}, ${this.y}) and radius ${this.radius}`;
    }
}

// Приклад використання класу Circle
const circle1 = new Circle(0, 0, 5);
console.log(`Circumference of circle1: ${circle1.get_circumference()}`);

const radius = 7;
const circumference = Circle.get_circumference_by_radius(radius);
console.log(`Circumference of circle with radius ${radius}: ${circumference}`);

const circle2 = circle1.copy();
console.log(`Copy of circle1:`, circle2);

const circle3 = new Circle(3, 3, 4);
console.log(`Circle created using static method:`, circle3);

const xPoint = 2, yPoint = 2;
const isInside = circle1.is_point_inside(xPoint, yPoint);
console.log(`Point (${xPoint}, ${yPoint}) is inside circle1: ${isInside}`);

console.log(circle1.toString());
//2
let myObject = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street"
  };
  
  let count = propsCount(myObject);
  
  console.log(count); 
  // 3
  const person = new Person("John", "Doe");
  person.showFullName();
  // Вивід: John Doe
  
  const student = new Student("Mary", "Smith", 2020);
  student.showFullName("John");
  // Вивід: Mary John Smith
  
  student.showCourse();
  // Вивід: Course: 3
  //4
  