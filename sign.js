function login()
{

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "icc" && pass === "cricket123")
{
document.getElementById("message").innerHTML="Login Successful";
document.getElementById("message").style.color="green";
}
else
{
document.getElementById("message").innerHTML="Invalid Username or Password";
document.getElementById("message").style.color="red";
}

}