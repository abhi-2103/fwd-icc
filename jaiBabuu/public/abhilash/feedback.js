function submitFeedback()
{

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let rating=document.getElementById("rating").value;
let feedback=document.getElementById("feedback").value;

if(name=="" || email=="" || rating=="" || feedback=="")
{
document.getElementById("message").innerHTML="Please fill all fields!";
document.getElementById("message").style.color="red";
}
else
{
document.getElementById("message").innerHTML="Thank you for your feedback!";
document.getElementById("message").style.color="green";
}

}