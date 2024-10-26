// ### Activity 1: Understanding Promises
// - **Task 1**: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

let newPromise=new Promise((res)=>{
    setTimeout(()=>{
        res("Message Printed after 2 second")
    },2000)
})
newPromise.then((message)=>{
    console.log(message)
})
// - **Task 2**: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
let errorPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Something went wrong")
    },2000)
});
errorPromise.catch((err)=>{
    console.log(err)
})

// ### Activity 2: Chaining Promises
// - **Task 3**: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

let fetchData=new Promise((res,rej)=>{
    setTimeout(() => {
        res("Data Fetched Successfully")
    }, 2000);
})
fetchData.then((res)=>{
    console.log(res)
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Data saved successfully");
        })
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log("Error occured",err)
    })
})

// ### Activity 3: Using Async/Await
// - **Task 4**: Write an async function that waits for a promise to resolve and then logs the resolved value.
let asyncFetch=async function PromiseRse() {
    let resolve=await new Promise((res,rej)=>{
        res("Fetchimg the data")
    },2000);
   
    console.log(resolve)
}
asyncFetch();
// - **Task 5**: Write an async function that handles a rejected promise using try-catch and logs the error message.
let errorFetch=async function rejected() {
    try {
        let errMsg= await new Promise((res,rej)=>{
            setTimeout(() => {
                rej("Data fetching failed");
            }, 2000);
        });
    console.log(errMsg)
    } catch (error) {
       console.log("Error caught",error) 
    }
    
}
errorFetch()

// ### Activity 4: Fetching Data from an API
// - **Task 6**: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
let fetchPost=fetch('https://jsonplaceholder.typicode.com/posts');
fetchPost.then((res)=>{
    if(!res.ok){
        throw new Error("Network response was not okay")
    }
    return res.json();
}).then((data)=>{
  
  const ids = data.map(post => post.title);
  console.log(ids); 
}).catch((err)=>{
    console.log("Error Caught",err)
})
// - **Task 7**: Use the `fetch` API to get data from a public API and log the response data to the console using async/await.
let fetchDataApi=async function fetApi() {
  try {
    let res=await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error("Network issue")
    }
    else{
        const data=await res.json();
        let userId=data.map(post=>post.id)
        console.log(userId)
    }
   
  } catch (error) {
    console.log("error in getting Asyn Await",error)
  }
    
}
fetchDataApi();

// ### Activity 5: Concurrent Promises
// - **Task 8**: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
let promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
    res("Promise 1 Executed")
    },2000)
})


let promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
    res("Promise 2 Executed")
    },2000)
})



let promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
    res("Promise 3 Executed")
    },2000)
})

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log("All Promise resloved",values)
}).catch((err)=>{
    console.log(err)
})
// - **Task 9**: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.

// Use Promise.race to log the value of the first promise that resolves
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log("First promise resolved:", value);
    })
    .catch((error) => {
        console.error("A promise was rejected:", error);
    });