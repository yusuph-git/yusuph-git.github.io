document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');

    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        nav.classList.remove("open");
    }
});

var typed=new Typed(".input",{
    strings:["Graphics Designer", "UX Designer", "Photo Editing", "Motion Grapher", "Front End Designer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})

function toggleMenu() {
    var navlinks = document.getElementById("navlinks");
    navlinks.classList.toggle("show");
}