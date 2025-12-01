const form = document.getElementById("signinForm")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});
function validateForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let valid=true;
  //regular expression
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
// Email
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "Enter a valid email address");
    valid = false;
  } else {
    showSuccess(email);
  }

  // Password
  if (!passwordRegex.test(password.value.trim())) {
    showError(password,"Password must have 6+ chars, a number, uppercase & special char");
    valid = false;
  } else {
    showSuccess(password);
  }
  if (valid) {
    alert("Form submitted successfully ✅");
    signinform.reset();
  }
}
function showError(input, message) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error");
  errorMsg.textContent = message;
  input.style.borderColor = "#f52e14ff";
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  const errorMsg = formGroup.querySelector(".error");
  errorMsg.textContent = "";
  input.style.borderColor = "#28a745";
}