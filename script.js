/* ===========================
   Typing Animation
=========================== */

const words = [
    "Software Engineer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Java Developer",
    "Problem Solver"
];

const subtitle = document.querySelector(".hero-left h2");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        subtitle.textContent = currentWord.substring(0, charIndex++);
    } else {

        subtitle.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length)
            wordIndex = 0;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

/* ===========================
   Scroll Reveal
=========================== */

const revealItems = document.querySelectorAll(
    ".card,.skill,.project,.edu,.contact,.title"
);

function reveal() {

    const trigger = window.innerHeight - 100;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top)
            current = section.getAttribute("id");

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current)
            link.classList.add("active");

    });

});

/* ===========================
   Floating Embers
=========================== */

const hero = document.querySelector(".hero");

for (let i = 0; i < 70; i++) {

    const ember = document.createElement("span");

    ember.classList.add("ember");

    ember.style.left = Math.random() * 100 + "%";

    ember.style.animationDuration =
        (Math.random() * 6 + 4) + "s";

    ember.style.animationDelay =
        Math.random() * 5 + "s";

    ember.style.opacity = Math.random();

    ember.style.width =
        ember.style.height =
        Math.random() * 6 + 3 + "px";

    hero.appendChild(ember);

}

/* ===========================
   Scroll To Top
=========================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "▲";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500)
        topBtn.classList.add("visible");
    else
        topBtn.classList.remove("visible");

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ===========================
   Mouse Glow
=========================== */

const glow = document.createElement("div");

glow.className = "mouseGlow";

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    glow.style.left = e.pageX + "px";

    glow.style.top = e.pageY + "px";

});

/* ===========================
   Counter Animation
=========================== */

const counters = document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(update, 20);

        } else {

            counter.innerText = target;

        }

    }

    update();

});