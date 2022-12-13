document.addEventListener("DOMContentLoaded", () => {
    const openHamburgerMenuButton = document.querySelector('.menuOpen');

    const menuCloseButton = document.querySelector('.menuClose');

    const menu = document.querySelector('.slideOutNav');

    openHamburgerMenuButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    })

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    })

}) // END hamburger nav

const image = document.querySelectorAll('.image');
console.log(image)

const overlay = document.querySelectorAll('.overlay');
console.log(overlay)

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('mouseover', () => {
        overlay[i].style.display="block";
    })

    overlay[i].addEventListener('mouseout', () => {
        overlay[i].style.display="none";
    })
} 