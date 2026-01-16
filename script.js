// THEME SWITCHER
const themeSwitcher = document.querySelector(".theme-switcher");
const themeIcon = themeSwitcher.querySelector("i");
const body = document.body;

// Function to set theme and save preference
function setTheme(isDarkMode) {
    body.classList.toggle("dark-mode", isDarkMode);
    themeIcon.classList.toggle("fa-moon", !isDarkMode);
    themeIcon.classList.toggle("fa-sun", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
}

// Check for saved preference on load
const prefersDark = localStorage.getItem("darkMode") === "true";
setTheme(prefersDark);

// Handle click event
themeSwitcher.addEventListener("click", () => {
    setTheme(!body.classList.contains("dark-mode"));
});


// CARD SCROLL-IN ANIMATION
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(card);
});


// CERTIFICATE FULLSCREEN VIEW
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("certModalImg");
const closeBtn = document.querySelector(".cert-close");

document.querySelectorAll(".cert-thumb").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
    if (e.target === modal) {
        closeModal();
    }
});

// CONTACT FORM SUBMISSION
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for your message! (This is a demo)");
    contactForm.reset();
});