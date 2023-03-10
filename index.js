/**************************************************************************/
{
    var a=10;
    let b=20;
    const c=30;
    console.log(a)
}
console.log(a)

function add(a,...b)
{
    console.log(b);
}
add(1,2,3,4,5)

const arr=[1,2,3,4,5]

const arr2=[...arr]

/**************************************************************************/
for(var i=0;i<5;i++){
    function colose(i){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
    colose(i)
}

/**************************************************************************/
const a = [
    {
        detail:{
            order:1
        }
    },
    {
        detail:{
            order:2
        }
    },
    {
        detail:{
            order:3
        }
    },
    {
        detail:{
            order:4
        }
    }
]
const b=3
function remove(b){
let dummy=a.filter((e)=>{
  return e.detail.order!=b  
})
return dummy 
}

console.log(remove(b))
/**************************************************************************/
function dummy(){
    let b=10;
    {
        let b1=20;
        var b2=30;
    }
    console.log(b)
}
dummy();

let a=[1,2,0];
const dummy1=a.filter((e)=>{
    return e;
})
console.log(dummy1)