const data=JSON.parse(localStorage.getItem("login"))
console.log("data",data)
function navbar(arg)
{
    return `<div class='navBar'>
        <a href="index.html">Quiz Apps</a>
        ${
            data && data.status==1?`<a>${data.name}</a>`:`${arg=='signUp'?`<a href="signup.html">Sign-up</a>`:`<a href="login.html">Login</a>`}`
        }
    </div>`;
}
export default navbar