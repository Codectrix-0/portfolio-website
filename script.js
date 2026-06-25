
const themeBtn = document.getElementById("theme-toggle");

const icon = themeBtn.querySelector("i");

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    icon.className="fa-solid fa-sun";

}

themeBtn.onclick=()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        icon.className="fa-solid fa-sun";

        localStorage.setItem("theme","dark");

    }

    else{

        icon.className="fa-solid fa-moon";

        localStorage.setItem("theme","light");

    }

}
const hiddenElements = document.querySelectorAll(
    ".hidden"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

hiddenElements.forEach((el)=>{

    observer.observe(el);

});
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left=e.clientX+"px";

    cursor.style.top=e.clientY+"px";

});

