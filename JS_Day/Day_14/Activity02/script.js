// #### Activity 2: Class Inheritance
// - **Task 3:** Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    greeting() {
        return `Hello ${this.name} from Parent Class`
    }
}

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    // Overriding the greeting method in Student class to include the studentId
    greeting() {
        return `Hello ${this.name} from Student Class. Student ID: ${this.studentId}`;
    }

    getId() {
        return `Student id : ${this.studentId}`
    }
}

const user = new Person("Ashok", 22);
const studentData = new Student("Ramu", 21, 76782)


console.log(studentData);

console.log(studentData.getId());

console.log(user.greeting());


// - **Task 4:** Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.


console.log(studentData.greeting());

// Student.prototype.greeting = function () {
//     return `This is an Overridden msg for ${this.name}`
// }

// console.log(studentData.greeting());

