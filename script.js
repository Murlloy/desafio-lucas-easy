const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav")

menuToggle.addEventListener("click", function(){
    nav.classList.toggle("show");
})