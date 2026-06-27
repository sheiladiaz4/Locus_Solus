/* ==========================================================
   BUSINESS EXPERIENCES
   Locus Solus
========================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,.92)";
        header.style.padding = "18px 0";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";

        document.querySelectorAll(".menu a").forEach(link=>{
            link.style.color="#2C2C2C";
        });

        document.querySelector(".logo").style.color="#3A5134";

    }else{

        header.style.background="transparent";
        header.style.padding="28px 0";
        header.style.boxShadow="none";

        document.querySelectorAll(".menu a").forEach(link=>{
            link.style.color="white";
        });

        document.querySelector(".logo").style.color="white";

    }

});
/* =======================================
   Fade on Scroll
======================================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
