const card = document.getElementById("card");
const lightBtn = document.getElementById("lightBtn");
const instruction = document.getElementById("instruction");
const celebration = document.getElementById("celebration");
const fireBtn = document.getElementById("fireBtn");
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");
const wishText = document.getElementById("wishText");
const closeWish = document.getElementById("closeWish");

let isLit = false;

const wishes = [
    "May your home be filled with laughter, your heart with peace, and your life with endless happiness.",
    "May every diya bring a new hope and every sparkle bring a beautiful memory.",
    "Wishing you prosperity, love, and countless reasons to smile this Diwali.",
    "May the light around you brighten every dream waiting to come true.",
    "May this festival bring warmth to your home and magic to your everyday life."
];

// Background stars
const stars = document.getElementById("stars");

for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    stars.appendChild(star);
}

// Light the diya
lightBtn.addEventListener("click", () => {
    if (isLit) return;

    isLit = true;
    card.classList.add("lit");
    document.body.classList.add("lit");

    instruction.textContent = "One little light can brighten everything.";
    lightBtn.textContent = "Diya is glowing ✨";
    lightBtn.disabled = true;
    lightBtn.style.opacity = ".6";

    setTimeout(() => {
        celebration.classList.remove("hidden");
    }, 900);
});

// Fireworks
function launchFirework(x, y) {
    const colors = ["#ffcf70", "#ff784f", "#fff1b5", "#f5a4a4", "#f5df8b"];

    for (let i = 0; i < 36; i++) {
        const particle = document.createElement("span");
        const angle = (Math.PI * 2 * i) / 36;
        const distance = 45 + Math.random() * 105;

        particle.className = "particle";
        particle.style.left = x + "px";
        particle.style.top = y + "px";
        particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
        particle.style.setProperty("--y", Math.sin(angle) * distance + "px");
        particle.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1400);
    }
}

fireBtn.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            launchFirework(
                window.innerWidth * (0.15 + Math.random() * 0.7),
                window.innerHeight * (0.12 + Math.random() * 0.55)
            );
        }, i * 300);
    }
});

// Open a random wish
wishBtn.addEventListener("click", () => {
    wishText.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    wishMessage.classList.remove("hidden");
});

closeWish.addEventListener("click", () => {
    wishMessage.classList.add("hidden");
});