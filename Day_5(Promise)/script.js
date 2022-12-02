let data=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        reject("Task Rejected")
    },2000)
})

data.then((item)=>{
    console.log(item)
}).catch((item)=>{
    console.log(item)
})

console.log("Hello");