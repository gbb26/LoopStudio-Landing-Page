const hamburger = document.getElementById('icon-hamburger');
const closeMenu = document.getElementById("icon-close");
const mobileMenu = document.getElementsByClassName('mobile-menu');
hamburger.addEventListener('click', () => {
    mobileMenu[0].style.display = "flex";
    mobileMenu[0].style.flexDirection = "column";
    mobileMenu[0].style.justifyContent = "flex-start";
    mobileMenu.classList.toggle('active');
});
closeMenu.addEventListener('click', () => {
    mobileMenu[0].style.display = "none";
    document.getElementById('sidebar').classList.toggle('active');

});