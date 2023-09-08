// /* Changement d'images automatique*/
// let images = Array.from(document.querySelectorAll('.hero__gallery img')); // récupérer toutes les images
// let currentIndex = 0; // index de l'image actuellement affichée

// setInterval(() => {
//     // cacher l'image actuellement affichée
//     images[currentIndex].style.opacity = '0';

//     // passer à l'image suivante
//     currentIndex = (currentIndex + 1) % images.length;

//     // afficher la nouvelle image
//     images[currentIndex].style.opacity = '1';
// }, 3000); // changer d'image toutes les 3 secondes



/*********************************************************************/
/**************************** Nav ***********************************/
/*******************************************************************/
window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav-menu');
    if (window.scrollY > 0) {
        nav.style.background = 'rgb(65 65 65 / 80%)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
    }
});


/*********************************************************************/
/************************** Counter *********************************/
/*******************************************************************/
let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

// Fonction pour démarrer le compteur
function startCounter(valueDisplay) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
}

// Créer un observer pour détecter quand le compteur est visible
let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Si l'élément est visible
            startCounter(entry.target); // Démarrer le compteur
            observer.unobserve(entry.target); // Arrêter d'observer cet élément après le démarrage du compteur
        }
    });
});

// Observer chaque élément de compteur
valueDisplays.forEach(valueDisplay => {
    observer.observe(valueDisplay);
});

/*********************************************************************/
/************************** Menu Overlay ****************************/
/*******************************************************************/

const menuShowBtn = document.getElementById('menu-show-btn');
const menuHideBtn = document.getElementById('menu-hide-btn');
const menuOverlay = document.querySelector('.nav-overlay');

menuShowBtn.addEventListener('click', () => menuOverlay.classList.add('show-overlay'));
menuHideBtn.addEventListener('click', () => menuOverlay.classList.remove('show-overlay'));

const anchorLinks = document.querySelectorAll('.nav-links a');
anchorLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('show-overlay');
    });
});


/*********************************************************************/
/*********************** Return to top ******************************/
/*******************************************************************/
var scrollTopButton = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



/*********************************************************************/
/*********************** animation **********************************/
/*******************************************************************/

//animation de la border-left du bas vers le haut
window.addEventListener('DOMContentLoaded', (event) => {
    const h1 = document.querySelector('.hero__content h1');
    h1.classList.add('animate-border');
});

// Entré du titre
window.addEventListener('DOMContentLoaded', (event) => {
    const normalTextSpan = document.querySelector('.normalText');
    const textColorSpan = document.querySelector('.textColor');

    setTimeout(() => {
        normalTextSpan.classList.add('slide-in');
    }, 500);

    setTimeout(() => {
        textColorSpan.classList.add('slide-in');
    }, 750);
});


// Evite défilement mise en cache
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}



/************************ Scroll Appaerance ***********************/
function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;

        if (revealTop < windowHeight) {
            let delay = reveals[i].getAttribute('data-delay');
            reveals[i].style.setProperty('--delay', delay);
            reveals[i].classList.add('reveal-visible');
        } else {
            reveals[i].classList.remove('reveal-visible');
        }
    }
}

window.addEventListener('scroll', reveal);
document.addEventListener("DOMContentLoaded", reveal);



