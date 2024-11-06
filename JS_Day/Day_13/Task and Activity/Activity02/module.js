exports.add = function add(a, b) {
    return a + b
}

exports.sub = function sub(a, b) {
    return a - b
}


exports.mul = function mul(a, b) {
    return a * b
}

exports.div = function div(a, b) {
    if (b !== 0) {
        return a / b
    }
    else {
        console.log("Can't Divide by Zero")
    }

}

//Module for task 4
 function greeting(name){
return `Hello ${name}, Hope you are doing well in your life... `
 }

 module.exports.greeting=greeting