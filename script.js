var menuBtn = document.querySelector('.menu-btn');
var navbar = document.querySelector('.navbar');
var navitem = document.querySelector('.nav-item')
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        var navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.add("sticky");
        }
    }
    else {
        var navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.remove("sticky");
        }
    }
})


menuBtn.addEventListener('click', function () {
    if (navbar) {
        navbar.classList.toggle('active');
    }
    if (navitem) {
        navitem.classList.toggle('active');
    }
});


//typing animations script
var typed = new Typed(".typing", {
    strings : ["YouTuber", "Developer", "Designer", "UI Developer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});

var typed = new Typed(".typing-2", {
    strings : ["YouTuber", "Developer", "Designer", "UI Developer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
});