// navbar component

const data=JSON.parse(localStorage.getItem("login"))
function navbar(arg)
{
    return `<div class='navBar'>
        <a href="index.html">Quiz Apps</a>
        ${
            data && data.status==1?`<div class='handle_icon'><a>${data.name}</a><i class="fa fa-sign-out" id='logout' onclick='logOut()'></i></div>`:`${arg=='signUp'?`<a href="signup.html">Sign-up</a>`:`<a href="login.html">Login</a>`}`
        }
    </div>`;
}
export default navbar