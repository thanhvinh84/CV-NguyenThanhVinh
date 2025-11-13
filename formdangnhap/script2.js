const wrapper = document.getElementById("wrapper");
const signInForm = document.querySelector(".sign-in");
const signUpForm = document.querySelector(".sign-up");

document.getElementById("go-signup").addEventListener("click", (e) => {
  e.preventDefault();
  signInForm.classList.remove("active");
  signUpForm.classList.add("active");
});

document.getElementById("go-signin").addEventListener("click", (e) => {
  e.preventDefault();
  signUpForm.classList.remove("active");
  signInForm.classList.add("active");
});

// Show sign-in by default
signInForm.classList.add("active");
