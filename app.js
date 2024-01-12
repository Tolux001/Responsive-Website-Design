const nav = document.querySelector("nav.mobile--nav");
const nav_desktop = document.querySelector("nav.desktop--nav");
const menu_icon = document.querySelector('nav.mobile--nav .menu-icon img');
const close_icon = document.querySelector('.close--icon');
const nav_bar = document.querySelector('.nav--bar--mobile');

window.addEventListener("scroll", () => {
    if(window.scrollY > 70) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
})
window.addEventListener("scroll", () => {
    if(window.scrollY > 80) {
        nav_desktop.classList.add("scrolled");
    } else {
        nav_desktop.classList.remove("scrolled");
    }
})

menu_icon.addEventListener('click', ()=> {
    nav_bar.classList.add("active");
})

close_icon.addEventListener('click', ()=> {
    nav_bar.classList.remove("active");
})

