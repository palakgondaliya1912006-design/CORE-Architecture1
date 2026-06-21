// =======================
// Mobile Menu
// =======================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});


// =======================
// Close Menu on Link Click
// =======================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// =======================
// Navbar Shadow on Scroll
// =======================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});


// =======================
// Contact Form (Backend Connect)
// =======================

function sendMessage() {

    fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector("input").value,
            email: document.querySelectorAll("input")[1].value,
            message: document.querySelector("textarea").value
        })
    })
    .then(res => res.text())
    .then(data => {
        alert(data);

        // clear form
        document.querySelectorAll("input").forEach(i => i.value = "");
        document.querySelector("textarea").value = "";
    });

}