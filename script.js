/* 
   LOADER
 */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

            loader.style.pointerEvents = "none";

        }, 700);

    }

});

/* 
   THEME TOGGLE
 */

const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

}

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

/* 
   MOBILE MENU
 */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* 
   BACK TO TOP
 */

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* 
   SCROLL PROGRESS
 */

const progress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progressHeight =

        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});

/* 
   TYPING EFFECT
 */

const typing = document.getElementById("typing");

const words = [

    "Frontend Developer",

    "BCA Student",

    "Open Source Learner",

    "JavaScript Enthusiast"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

/* 
   SCROLL REVEAL
 */

const hiddenElements = document.querySelectorAll(

    ".section,.project-card,.skill-card,.info-box,.timeline-item,.achievement-card,.contact-card"

);

hiddenElements.forEach(el => {

    el.classList.add("hidden");

});

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(el => observer.observe(el));

/* 
   CURRENT YEAR
 */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}

console.log("Portfolio V4 Loaded Successfully 🚀");
