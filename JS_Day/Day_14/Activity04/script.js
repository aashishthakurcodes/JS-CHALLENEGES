// #### Activity 4: Getters and Setters
// - **Task 7:** Add a getter method to the `Person` class to return the full name (assume a `firstName` and `lastName` property). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }


    //Task 8
    // Setter to update both firstName and lastName from a full name
    set fullName(fullName){
        const name=fullName.split(" ");
        this.firstName=name[0];
        this.lastName=name[1]
    }
}

const PersonData=new Person("Rahul","Kumar");
console.log(PersonData.fullName);


// - **Task 8:** Add a setter method to the `Person` class to update the name properties (`firstName` and `lastName`). Update the name using the setter and log the updated full name.
console.log(PersonData.firstName);
console.log(PersonData.lastName);
console.log(PersonData.fullName);

PersonData.fullName="Manish Kashyap"


console.log("Updated Full Name",PersonData.fullName);
