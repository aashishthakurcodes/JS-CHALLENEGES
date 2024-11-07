// #### Activity 5: Private Fields (Optional)
// - **Task 9:** Define a class `Account` with private fields for `balance` and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;
    constructor(initialBalance = 0) {
        this.#balance=initialBalance;
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            return `Deposited: $${amount}`
          
        }
        else{
            console.log("Deposit amount should be greater than 0 ");
            
        }
    }
    withdraw(amount){
        if(amount<=this.#balance && amount>0){
            this.#balance-=amount;
            return `Withdrew: $${amount}`
            
            
        }
        else{
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }


    getBalance(){
        return this.#balance
    }
}





// - **Task 10:** Create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.
const myAccount=new Account(1000);
console.log(myAccount.getBalance())
console.log(myAccount.withdraw(567))
console.log(myAccount.getBalance())
console.log(myAccount.deposit(798))
console.log("Current Balance: $" + myAccount.getBalance()); 