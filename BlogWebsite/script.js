const mobileMenu = document.querySelector(".mobile-menu");
const scrollbtn = document.querySelector(".scroll-top");
mobileMenu.addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("show");
})

window.addEventListener("scroll", function () {
    if (this.document.body.scrollTop > 100 || this.document.documentElement.scrollTop > 100) {
        scrollbtn.style.display = "flex";
    }
    else {
        scrollbtn.style.display = "none";
    }
})

scrollbtn.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})