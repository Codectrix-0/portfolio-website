/* 
   TYPING ANIMATION
 */

const text = [
    "Frontend Developer",
    "BCA Student",
    "Open Source Contributor",
    "UI Enthusiast",
    "Continuous Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = text[textIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            textIndex++;

            if(textIndex >= text.length){

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* 
   THEME TOGGLE
 */

const themeBtn = document.getElementById("theme-toggle");

const body = document.body;

const icon = themeBtn.querySelector("i");

if(localStorage.getItem("theme") === "light"){

    body.classList.add("light");

    icon.className = "fa-solid fa-sun";

}

themeBtn.onclick = () => {

    body.classList.toggle("light");

    if(body.classList.contains("light")){

        localStorage.setItem("theme","light");

        icon.className = "fa-solid fa-sun";

    }else{

        localStorage.setItem("theme","dark");

        icon.className = "fa-solid fa-moon";

    }

};


/* 
   SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

revealElements.forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


/* 
   CURSOR GLOW
 */

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});


/* 
   BACK TO TOP
 */

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.classList.add("active");

}else{

topBtn.classList.remove("active");

}

});

topBtn.onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* 
   SCROLL PROGRESS
 */

const progress = document.createElement("div");

progress.id = "progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total =

document.documentElement.scrollHeight -

window.innerHeight;

const current =

(window.scrollY / total) * 100;

progress.style.width = current + "%";

});
