
let menu = document.querySelector(".navbar-mobile");
let aMenu = document.querySelector(".navbar-fixed");

function displayMenu() {
    aMenu.style.display="none";
    menu.style.display="block";
    menu.style.left = "0";
};
function closeMenu() {
    aMenu.style.display="flex";
    menu.style.display="none";
    menu.style.left = "-100%";
};