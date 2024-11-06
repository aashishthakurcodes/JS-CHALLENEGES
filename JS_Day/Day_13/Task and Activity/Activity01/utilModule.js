function addTwoNumbers(a,b){
return a+b;
}


function subtractNumbers(a,b){
    return a-b;
}



const person={
    name:"Rahul",
    age:23,
    greet:function(){
        return `Hello ${this.name}`
    }

}
module.exports={addTwoNumbers,subtractNumbers,person}