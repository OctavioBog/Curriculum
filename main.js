const viewportHeight = window.innerHeight;
const nombre = document.querySelector(".nombre");
const nombre2 = document.querySelector(".nombre2");
const sections = document.querySelectorAll(".especialidad");

function checkScroll() {
    nombre.classList.add("animate__animated", "animate__bounceInDown");
    nombre2.classList.add("animate__animated", "animate__bounceInUp");

    nombre.style.opacity = "1";
    nombre2.style.opacity = "1";

    setTimeout(() => {
        animateButtons();
    }, 800);
}

function animateButtons() {
    const buttons = document.querySelectorAll(".tools");
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.classList.add("animate__animated", "animate__zoomInUp");
            button.style.opacity = "1";
        }, index * 500);
    });
}

document.querySelectorAll('.tools a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener("load", () => {
    checkScroll();
});

const typingTitle = document.getElementById("typing-title");
const phrases = ["Front-end developer", "Web designer", "Javascript enthusiast"];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typingSpeed = 200;
const deletingSpeed = 150;
const pauseAfterTyping = 1000;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typingTitle.textContent = currentPhrase.substring(0, letterIndex);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        delay = pauseAfterTyping;
        isDeleting = true;
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();
