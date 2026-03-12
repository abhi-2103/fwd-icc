function login() {

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "icc" && pass === "cricket123") {
        document.getElementById("message").innerHTML = "Login Successful";
        document.getElementById("message").style.color = "green";

        // redirect to home after 1 second
        setTimeout(function () {
            window.location.href = "index.html";   // or "./index.html"
        }, 1000);
    } else {
        document.getElementById("message").innerHTML = "Invalid Username or Password";
        document.getElementById("message").style.color = "red";
    }
}
