// ### Activity 4: Using Third-Party Modules
// - **Task 6**: Install a third-party module (e.g., `lodash`) using npm. Import and use a function from this module in a script.

const _=require('lodash');

const numbers=[3,4,5,6,2,9,1];
const sum=_.sum(numbers);
const chunk=_.chunk(numbers)
console.log(sum)
console.log(chunk)


// - **Task 7**: Install a third-party module (e.g., `axios`) using npm. Import and use this module to make a network request in a script.

const axios=require('axios')
async function getDetail(){
    try {
        const res=await axios.get("https://dummyjson.com/comments");
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

getDetail()