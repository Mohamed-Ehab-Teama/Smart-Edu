// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Dashboard Role Switching
const roleButtons = document.querySelectorAll(".role-btn");
const dashboardPanels = document.querySelectorAll(".dashboard-panel");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.getAttribute("data-role");

    // Update active button
    roleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Update active panel
    dashboardPanels.forEach((panel) => panel.classList.remove("active"));
    document.getElementById(`${role}-dashboard`).classList.add("active");
  });
});

// Modal Functionality
const modal = document.getElementById("login");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form Submission
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully! (Demo)");
  });
});
