// /* MENU SHOW Y HIDDEN */
// const navMenu =  document.getElementById('navbar-menu'),
//     navToggle = document.getElementById('toggle'),
//     // navClose = document.getElementById('nav-close')

// /* MENU SHOW */
// /* Validate if constant exists */
// if(navToggle){
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }

// /* MENU HIDDEN */
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu')
//     })
// }

// ====== SKILLS ======= //
const skillsContent = document.getElementsByClassName('skills_content')
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((eL) => {
    eL.addEventListener('click', toggleSkills)
})

// ====== SERVICES MODAL ======= //
const modalViews = document.querySelectorAll('.services_modal'),
        modalBtns = document.querySelectorAll('.services_btn'),
        modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


// =============== PORTFOLIO SWIPER ================ //


const swiper = new Swiper('.swiper', {
    cssMode: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // mousewheel:true,

  });

// // ====== SCROLL ACTIVE LINK ======= //
// const sections =document.querySelectorAll('section[id]')

// function scrollActive () {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop = 50;
//         const sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')        
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


// ====== CHANGE BACKGROUND HEADER ======= //
function scrollHeader() {
    const nav = document.getElementById('navbar')
// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 60) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}    
window.addEventListener('scroll', scrollHeader)


// ====== SHOW SCROLL UP ======= //
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher than 560 viewport height, add the show scroll class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// ====== DARK/LIGHT THEME ======= //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating tbe dark-theme class
const getCurrentTheme = () => document.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose an option
if (selectedTheme) {
    // If the validation is fulfilled, we ask that the issue was to know if we activated or deactivated the dark mode
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save  the them and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
