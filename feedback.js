// feedback.js

function loadFeedbacks() {
  // get existing array or empty
  const saved = JSON.parse(localStorage.getItem("feedbacks") || "[]");
  const listDiv = document.getElementById("feedbackList");
  listDiv.innerHTML = ""; // clear

  saved.forEach(entry => {
    const p = document.createElement("p");
    p.textContent = `${entry.time} - ${entry.name} (${entry.email}, ${entry.rating}): ${entry.feedback}`;
    listDiv.appendChild(p);
  });
}

function submitFeedback() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let rating = document.getElementById("rating").value;
  let feedback = document.getElementById("feedback").value;

  if (name === "" || email === "" || rating === "" || feedback === "") {
    document.getElementById("message").innerHTML = "Please fill all fields!";
    document.getElementById("message").style.color = "red";
    return;
  }

  // create object for this feedback
  const entry = {
    name,
    email,
    rating,
    feedback,
    time: new Date().toLocaleString()
  };

  // read old array from localStorage, push new one, save back
  const saved = JSON.parse(localStorage.getItem("feedbacks") || "[]");
  saved.push(entry);
  localStorage.setItem("feedbacks", JSON.stringify(saved)); // store array as JSON string [web:34][web:35][web:49]

  document.getElementById("message").innerHTML = "Thank you for your feedback!";
  document.getElementById("message").style.color = "green";

  // clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("feedback").value = "";

  // update list on page
  loadFeedbacks();

  // also show in console (for your ma'am, via Inspect → Console)
  console.log("New feedback submitted:", entry);
}

// load existing feedbacks when page opens
window.onload = loadFeedbacks;
