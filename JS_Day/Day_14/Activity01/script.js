// ### Tasks/Activities

// #### Activity 1: Class Definition
// - **Task 1:** Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    ;
    greeting(){
        return `Hello my name is ${this.name} and I m ${this.age} yeras old`
    }
}

const personData=new Person("Rahul",22);
console.log(personData.greeting())

// - **Task 2:** Add a method to the `Person` class that updates the `age` property and logs the updated age.
//We can add methods after declaring the class also
Person.prototype.updateAge=function(newAge){
   this.age=newAge;
   return `"Age Updtaed" ${this.age}`
   
}


console.log(personData.updateAge(33));
