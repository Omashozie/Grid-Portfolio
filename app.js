var hamburger = document.querySelector(".hamburger");
var navItem = document.querySelector(".nav-item");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
});
document.querySelectorAll(".navItem").forEach((n) => 
n.addEventListener("click",()=> {
    hamburger.classList.remove("active");
    navItem.classList.remove("active");
}))