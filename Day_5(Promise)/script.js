// How to make promise
// let data=new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         reject("Task Rejected")
//     },2000)
// })

// data.then((item)=>{
//     console.log(item)
// }).catch((item)=>{
//     console.log(item)
// })

// console.log("Hello");

// how to handle promise in api.
let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
data.then((res)=>{
    return res.json();
}).then((result)=>{ // promise chaning
    console.log(result);
})
