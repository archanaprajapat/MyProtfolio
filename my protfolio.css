// 1. Mobile Screen par Navbar Toggle (Open/Close) karna
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");       // Menu icon ko 'X' me badalna
        navbar.classList.toggle("active");       // Navbar ko show/hide karna
    };
}

// 2. Scroll karne par sahi Section ke Link ko active (highlight) karna
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
                // Aapke purane selector ke bug ko yahan theek kiya gaya hai
                const activeLink = document.querySelector(`header nav a[href*=${id}]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            });
        }
    });

    // Jab mobile me scroll karein, toh menu apne aap band ho jaye
    if (menuIcon && navbar) {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    }
};

// 3. Dark Mode Toggle Functionality (With CSS Variables & Local Storage)
const darkModeToggle = document.querySelector("#darkmode-toggle");
const body = document.querySelector("body");
const icon = document.querySelector(".btn__icon");

// Pehle se saved state check karna
let isDarkMode = localStorage.getItem("darkmode") === "true"; 

const toggleDarkMode = () => {
    // Dark mode aur Light mode ke colors set karna
    document.documentElement.style.setProperty("--bg-color", isDarkMode ? "#080808" : "#f0f0f0");
    document.documentElement.style.setProperty("--second-bg-color", isDarkMode ? "#131313" : "#e0e0e0");
    document.documentElement.style.setProperty("--text-color", isDarkMode ? "white" : "#333333");
    document.documentElement.style.setProperty("--main-color", isDarkMode ? "#00ffee" : "#fa8128");
    
    if (body) {
        body.classList.toggle("darkmode", isDarkMode);
    }
    updateIcon();
};

// Click karne par mode switch hona
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem("darkmode", isDarkMode); // Local storage me save karna
        toggleDarkMode();
    });
}

// Moon aur Sun icon badalne ka function (with animation)
function updateIcon() {
    if (!icon) return;
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
    }, 500); 
}

// Page load hote hi check karega ki kaunsa mode pehle se active tha
toggleDarkMode();

// 4. Contact Form (Formspree) Validation & Success/Error Alerts
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
                // Agar SweetAlert (Swal) library loaded hai toh stylish alert, nahi toh normal alert
                if (window.Swal) {
                    Swal.fire({
                        icon: "success",
                        title: "Message sent!",
                        text: "Thanks for reaching out, I'll get back to you soon.",
                        background: isDarkMode ? '#131313' : '#ffffff',
                        color: isDarkMode ? '#ffffff' : '#333333'
                    });
                } else {
                    alert("Message sent! Thanks for reaching out.");
                }
                contactForm.reset(); // Form clear karna
            } else {
                throw new Error("Form submission failed");
            }
        } catch (err) {
            if (window.Swal) {
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong",
                    text: "Please try again in a moment.",
                    background: isDarkMode ? '#131313' : '#ffffff',
                    color: isDarkMode ? '#ffffff' : '#333333'
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        }
    });
}
