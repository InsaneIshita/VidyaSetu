const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
  });

  signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
  });

  // Redirect to teacher dashboard after login
// Get role from URL (default teacher)
const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get("role") || "teacher";

// Forms toggle logic (already correct)
loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("active");
  signupBtn.classList.remove("active");
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
});

signupBtn.addEventListener("click", () => {
  signupBtn.classList.add("active");
  loginBtn.classList.remove("active");
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});

// Handle redirects based on role
function redirectAfterAuth() {
  if (role === "teacher") {
    window.location.href = "dashboard.html";  // stays in teacher folder
  } else if (role === "student") {
    window.location.href = "../student/student_dashboard.html";  // go up one folder then into student
  }
}


// Redirect on login
document.querySelector("#loginForm form").addEventListener("submit", function(e) {
  e.preventDefault();
  redirectAfterAuth();
});

// Redirect on signup
document.querySelector("#signupForm form").addEventListener("submit", function(e) {
  e.preventDefault();
  redirectAfterAuth();
});
