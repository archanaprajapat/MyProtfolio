// Toggle navbar visibility on small screens
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// Highlight active section in the navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  const top = window.scrollY;
  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const activeLink = document.querySelector(`header nav a[href*=${id}]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });
};
// Dark mode toggle functionality
const darkModeToggle = document.querySelector("#darkmode-toggle");
const body = document.querySelector("body");
const icon = document.querySelector(".btn__icon");
let isDarkMode = localStorage.getItem("darkmode") !== "false"; // Defaults to dark mode unless the user explicitly chose light mode before
const toggleDarkMode = () => {
  document.documentElement.style.setProperty(
    "--bg-color",
    isDarkMode ? "#080808" : "#f0f0f0"
  );
  document.documentElement.style.setProperty(
    "--second-bg-color",
    isDarkMode ? "#131313" : "#e0e0e0"
  );
  document.documentElement.style.setProperty(
    "--text-color",
    isDarkMode ? "white" : "#333"
  );
  document.documentElement.style.setProperty(
    "--main-color",
    isDarkMode ? "#00ffee" : "#fa8128"
  );
  body.classList.toggle("darkmode", isDarkMode);
  updateIcon();
};
darkModeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  store(isDarkMode);
  toggleDarkMode();
});
function store(value) {
  localStorage.setItem("darkmode", value);
}
function updateIcon() {
  icon.classList.add("animated");
  if (isDarkMode) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }
  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500); // Remove the animation class after it completes
}
// Initialize dark mode on page load
toggleDarkMode();
// Certificate lightbox — click a certificate image to view it full-size
const certLightbox = document.querySelector("#certLightbox");
const certLightboxImg = document.querySelector("#certLightboxImg");
const certLightboxClose = document.querySelector("#certLightboxClose");
const certImages = document.querySelectorAll(".cert-clickable");

if (certLightbox && certImages.length) {
  certImages.forEach((img) => {
    img.addEventListener("click", () => {
      certLightboxImg.src = img.src;
      certLightboxImg.alt = img.alt;
      certLightbox.classList.add("active");
    });
  });

  const closeCertLightbox = () => certLightbox.classList.remove("active");

  certLightboxClose.addEventListener("click", closeCertLightbox);
  certLightbox.addEventListener("click", (e) => {
    if (e.target === certLightbox) closeCertLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCertLightbox();
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        if (window.Swal) {
          Swal.fire({
            icon: "success",
            title: "Message sent!",
            text: "Thanks for reaching out, I'll get back to you soon.",
          });
        } else {
          alert("Message sent! Thanks for reaching out.");
        }
        contactForm.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      if (window.Swal) {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again in a moment.",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  });
}
