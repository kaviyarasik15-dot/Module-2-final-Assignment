const form = document.getElementById("registrationForm");
 form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validateForm();
  });

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmpassword = document.getElementById("confirmpassword");
  const phone = document.getElementById("phone");
  
  let valid = true;

  // Regular Expressions
  const nameRegex = /^[A-Za-z\s]{3,}$/;//
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  const confirmpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  const phoneRegex = /^[0-9]{10}$/;

  // Name
  if (!nameRegex.test(name.value.trim())) {
    showError(name, "Name must contain at least 3 letters");
    valid = false;
  } else {
    showSuccess(name);
  }
  // Email
  if (!emailRegex.test(email.value.trim())) {
    showError(email, "Enter a valid email address");
    valid = false;
  } else {
    showSuccess(email);
  }
  // Password
  if (!passwordRegex.test(password.value.trim())) {
    showError(password,"Password must have 6+ chars, a number, uppercase & special char" );
    valid = false;
  } else {
    showSuccess(password);
  }
  if (!confirmpasswordRegex.test(confirmpassword.value.trim())) {
    showError(
      confirmpassword,
      "Password must have 6+ chars, a number, uppercase & special char"
    );
    valid = false;
  } else {
    showSuccess(confirmpassword);
  }

  // Phone
  if (!phoneRegex.test(phone.value.trim())) {
    showError(phone, "Phone number must be 10 digits");
    valid = false;
  } else {
    showSuccess(phone);
  }

  if (valid) {
    alert("Form submitted successfully ✅");
    form.reset();
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