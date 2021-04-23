let menu = document.querySelector(".navbar-mobile");
let aMenu = document.querySelector(".navbar-fixed");

let aboutMeImg = document.querySelector(".profile-image");
let aboutMeH2 = document.querySelector(".about-me__h2");
let aboutMeH3 = document.querySelector(".about-me__h3");
let aboutMeP = document.querySelector(".about-me__p");

let projects = document.querySelector("#projects");
let contactForm = document.querySelector("#contact-form");
let contactImg = document.querySelector("#contact-image");

let screenSize = window.screen;
let screenWidth = screenSize.width;

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
window.onload = function() {
    aboutMeH2.style.opacity = "1";
    setTimeout(() => {
        aboutMeH3.style.opacity ="1";
        setTimeout(() => {
            aboutMeP.style.opacity="1";
            setTimeout(() => {
                aboutMeImg.style.width = "100%";
                aboutMeImg.style.opacity ="1";
            }, 1010);
        }, 1010);
    }, 1010);

};
window.onscroll = function() {
    let y = window.scrollY;

    if (screenWidth >= 750) {
    
        if (y >= 900) {
            contactForm.style.opacity = "1";
            contactImg.style.opacity = "1";
        } else{
            contactForm.style.opacity = "0";
            contactImg.style.opacity = "0";
        };

    } else if (screenWidth >= 320 && screenWidth < 750){
        if (y >= 400) {
            contactForm.style.opacity = "1";
            contactImg.style.opacity = "1";
        } else{
            contactForm.style.opacity = "0";
            contactImg.style.opacity = "0";
        };
    };
};