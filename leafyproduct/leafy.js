// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form from submitting by default

    // Grab input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all the fields.");
      return;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If all is good
    alert("Thanks for your message, " + name + "! We'll get back to you soon.");
    form.reset(); // Clear the form
  });
});
