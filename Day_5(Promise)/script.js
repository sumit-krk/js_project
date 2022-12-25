// How to make promise
// let data=new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         reject("Task Rejected")
//     },2000)
// })

// note:- reject("Task Rejected") or 
// throw new Error("data issue") // both will work same

// data.then((item)=>{
//     console.log(item)
// }).catch((item)=>{
//     console.log(item)
// })
// console.log("Hello");

/********************************************************************************************************************/

// how to handle promise in api.
let data = fetch("https://jsonplaceholder.typicode.com/todos/1");
data.then((res)=>{
    return res.json();
}).then((result)=>{ // promise chaning
    console.log(result);
})

/*****************************************************************************************************************/
async function A1() {
  let data = await fetch("https://fakestoreapi.com/products").then((data) =>
    data.json()
  );
  data = await data;
  console.log("first function calli");
  console.log(data);
  return data;
}
async function A2() {
  let data = await fetch("https://fakestoreapi.com/products/1").then((data) =>
    data.json()
  );
  data = await data;
  console.log("second function call");
  console.log(data);
  return data;
}
async function print(){
    let data_1=await A1();
    console.log("after_fiest");
    let data_2=await A2();
    console.log("After_second");
    console.log(data_1,data_2);
    console.log("end")
}
print();

/****************************************************************************************************************/
let a=20;
let b=0;
async function demo(){
    let data=new Promise((res,rej)=>{
  setTimeout(()=>{
      res(30);
  },2000) 
})
b=await data;
console.log(a+b);
console.log("first function went");
}

async function print(){
    await demo();
    console.log("hi");
}
print();
