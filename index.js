function toggleMenu()
{
    const mobileIcon = document.querySelector(".mobile-icon");
    const sideNav    = document.querySelector(".side-nav");
    const overlay    = document.querySelector(".overlay")

    mobileIcon.addEventListener("click", () => {
        sideNav.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");
    })
}

document.addEventListener("DOMContentLoaded", () => {
    toggleMenu();
})