// sticky navabr 
window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >50)
});
// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};
const navLink = document.querySelectorAll(".nav-links");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
};