function navbar(arg)
{
    return `<div class='navBar'>
        <a href="index.html">Quiz Apps</a></h1>
        ${arg=='signUp'?`<a href="signup.html">Sign-up</a>`:`<a href="login.html">Login</a>`}
    </div>`;
}
export default navbar