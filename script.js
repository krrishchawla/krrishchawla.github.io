const phrases = ["an AI enthusiast.", "a developer.", "an innovator."];
let currentPhraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 1200; // Delay between current and next text
let textPrefix = "I am ";

function typeEffect() {
    const typewriter = document.getElementById("typewriter");
    let currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
        charIndex--;
        typewriter.textContent = textPrefix + currentPhrase.substring(0, charIndex);
    } else {
        charIndex++;
        typewriter.textContent = textPrefix + currentPhrase.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => { isDeleting = true; }, newTextDelay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, typingDelay);
        return;
    }

    setTimeout(typeEffect, isDeleting ? erasingDelay : typingDelay);
}

document.addEventListener("DOMContentLoaded", typeEffect);
