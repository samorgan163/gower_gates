const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    document.body.classList.toggle("menu-open");
    navMenu.classList.toggle("active");
    
    const isOpen = navMenu.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});

function closeMenu() {

    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation");

}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", closeMenu);
});