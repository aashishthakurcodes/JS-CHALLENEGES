// #### Activity 3: Static Methods and Properties
// - **Task 5:** Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static greeting(name){
        return `Hello ${name} Greeting fron static method `
    }
}

console.log(Person.greeting("Rocky"))

// - **Task 6:** Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student {

    static studentCount=0;
    constructor(name,age,studentId){
     this.name=name
     this.age=age
     this.studentId=studentId

     Student.studentCount++
    }
    
    studentInfo(){
        return `Name: ${this.name}, Age: ${this.age}, Student ID: ${this.studentId}`
    }
}

const student1=new Student("Rahul",21,2278)
const student2=new Student("Arun",21,2279)
const student3=new Student("Saroj",21,2280)
const student4=new Student("Saloni",21,2281)

console.log(student1,student2,student3,student4);
console.log(`Total number of students: ${Student.studentCount}`); 
