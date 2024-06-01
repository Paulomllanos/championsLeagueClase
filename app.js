const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class", 
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
})

// Optimizacion
navLinks.addEventListener("click",() => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute(
        "class", 
        "ri-menu-3-line"
    );
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}
// contenedor
ScrollReveal().reveal(".container__content h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".container__content h2", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".container__content p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".socials", {
    ...scrollRevealOption,
    delay: 1500,
});