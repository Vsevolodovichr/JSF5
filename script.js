//1
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
  const person = new Person("Roman", "Skurenko");
  person.showFullName();  
  const student = new Student("Mary", "Smith", 2020);
  student.showFullName("Roman"); 
  student.showCourse();
  //4
  const marker = new Marker("blue");
marker.print("Hello, world!");
marker.inkLevel; 
marker.refill();
marker.inkLevel; 
//5
const worker1 = new Worker("John Doe", 100, 20);
const worker2 = new Worker("Jane Doe", 150, 30);

console.log(worker1.showSalary()); // 2000
console.log(worker2.showSalary()); // 4500

worker1.experience = 1.5;

console.log(worker1.showSalary()); // 3000

const workers = [
  new Worker("John Doe", 100, 20, 1.2),
  new Worker("Jane Doe", 150, 30, 1.5),
  new Worker("Peter Doe", 200, 40, 1.8),
];

workers.sort((a, b) => a.experience - b.experience);

for (const worker of workers) {
  console.log(worker.fullName + ": " + worker.showSalary());
}
//