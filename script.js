let attempts = 0;

function goToPassword() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("passwordScreen").classList.remove("hidden");
}

function checkPassword() {
    const input = document.getElementById("passwordInput");
    const message = document.getElementById("message");

    if (input.value === "14052025") {
        showHearts();

        document.getElementById("passwordScreen").classList.add("hidden");
        document.getElementById("loadingScreen").classList.remove("hidden");

        setTimeout(() => {
            document.getElementById("loadingScreen").classList.add("hidden");
            document.getElementById("birthday").classList.remove("hidden");

            document.getElementById("bgMusic").play();
        }, 2000);

    } else {
        attempts++;

        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 400);

        if (attempts === 1) {
            message.innerText = "try again Noung ♡";
        } else if (attempts === 2) {
            message.innerText = "It’s a date ☃";
        } else if (attempts === 3) {
            message.innerText = "The day you became mine ✿⋆";
        } else {
            message.innerText = "DDMMYYYY 𐔌՞. .՞𐦯";
        }
    }
}

function showHearts() {
    const container = document.getElementById("hearts");

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "80%";

        container.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

let tapCount = 0;

function handleTap() {
    tapCount++;

    if (tapCount === 5) {
        openEasterEgg();
    }
}

function openEasterEgg() {
    document.getElementById("birthday").classList.add("hidden");
    document.getElementById("easterIntro").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("easterIntro").classList.add("hidden");
        document.getElementById("easterPage").classList.remove("hidden");

        generateStars();
    }, 2500);
}

function generateStars() {
    const container = document.getElementById("stars");

    const messages = [
        "The day I realized I love you 💖",
        "Your smile is my favorite thing 😊",
        "You make my world brighter ✨",
        "Every moment with you matters 💕",
        "You're my safe place 🌸",
        "I’d choose you again and again ❤️"
    ];

    for (let i = 0; i < 10; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.innerText = "✨";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.onclick = () => {
            alert(messages[Math.floor(Math.random() * messages.length)]);
        };

        container.appendChild(star);
    }
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden-scroll").forEach(el => {
    observer.observe(el);
});
function updateCounter() {
    const startDate = new Date("2025-05-14T00:00:00");
    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;

    document.getElementById("counter").innerText =
        `${days} days ${hours} hours ${minutes} minutes`;
}

setInterval(updateCounter, 1000);
updateCounter();

