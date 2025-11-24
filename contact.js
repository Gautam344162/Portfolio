document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Reset errors
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('messageError').textContent = "";
    document.getElementById('formMsg').textContent = "";

    // Validate
    let valid = true;
    if (name === "") {
      document.getElementById('nameError').textContent = "Name is required.";
      valid = false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById('emailError').textContent = "Enter a valid email.";
      valid = false;
    }
    if (message === "") {
      document.getElementById('messageError').textContent = "Message is required.";
      valid = false;
    }

    // If valid, store in localStorage and redirect
    if (valid) {
      localStorage.setItem("contactData", JSON.stringify({ name, email, message }));
      document.getElementById('formMsg').textContent = "Submitted! Redirecting...";
      setTimeout(function () {
        window.location.href = "form-details.html";
      }, 900);
    } else {
      document.getElementById('formMsg').textContent = "Please fix errors above.";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.progress-bar').forEach(function(bar) {
    var percent = bar.querySelector('.progress').getAttribute('data-percent');
    var percentSpan = bar.querySelector('.skill-percentage');
    if (percentSpan) percentSpan.textContent = percent + '%';
  });
});

