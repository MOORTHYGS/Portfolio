const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle?.addEventListener('click', () => {
    navbar.classList.toggle('open');
});

document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', () => navbar.classList.remove('open'));
});

const typingText = document.getElementById('typing-text');
const phrases = [
    'Cloud MES backend',
    'AVEVA integration work',
    'MSSQL archive jobs',
    'Web app development'
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
    if (!typingText) return;

    const current = phrases[phraseIndex];
    typingText.textContent = deleting
        ? current.slice(0, --charIndex)
        : current.slice(0, ++charIndex);

    let speed = deleting ? 55 : 95;

    if (!deleting && charIndex === current.length) {
        deleting = true;
        speed = 1300;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 320;
    }

    setTimeout(typeLoop, speed);
}

window.addEventListener('DOMContentLoaded', typeLoop);

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    const checkpoint = window.scrollY + 140;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (checkpoint >= top && checkpoint < bottom) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const active = document.querySelector(`.navbar a[href="#${section.id}"]`);
            active?.classList.add('active');
        }
    });
});
