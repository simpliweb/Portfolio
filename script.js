AOS.init();

document.addEventListener("DOMContentLoaded", () => {
    const openHamburgerMenuButton = document.querySelector('.menuOpen');
    const menuCloseButton = document.querySelector('.menuClose');
    const menu = document.querySelector('.slideOutNav');
    const home = document.querySelector('.homeButton');
    const about = document.querySelector('.aboutButton');
    const projects = document.querySelector('.projectsButton');

    openHamburgerMenuButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    })

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    })
    home.addEventListener('click', (e) => {
      menu.classList.remove('open');
    });
    about.addEventListener('click', (e) => {
      menu.classList.remove('open');
    });
    projects.addEventListener('click', (e) => {
      menu.classList.remove('open');
    });
}) // END hamburger nav

const image = document.querySelectorAll('.image');
console.log(image)

const overlay = document.querySelectorAll('.overlay');
console.log(overlay)

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', () => {
        overlay[i].style.display="block";
    })

    overlay[i].addEventListener('click', () => {
        overlay[i].style.display="none";
    })
} // END overlay for media query max width 1024px on project images

const button = document.querySelector('.aboutButton');
console.log(button)

const myInfo = document.querySelector('.aboutInfo');
console.log(myInfo)

button.addEventListener('click', () => {
    myInfo.style.display="block";
})

myInfo.addEventListener('click', () => {
    myInfo.style.display="none";
}) // END overlay for .aboutButton to show .aboutInfo
