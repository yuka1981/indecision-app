// Setup constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.major) {
      return (description += ` Their major is ${this.major}.`);
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  getGretting() {
    let greeting = super.getGretting();

    if (this.homelocation) {
      return (greeting += ` I'm visiting from ${this.homelocation}`);
    }

    return greeting;
  }
}

const me = new Student("Reid", 40, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const traveler = new Traveler("Reid", 40, "Taipei");
console.log(traveler.getGretting());

const other_traveler = new Traveler();
console.log(other_traveler.getGretting());
