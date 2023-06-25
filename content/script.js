function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg"
    }
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('.description-I', {duration: 1000});
sr.reveal('.description2-I', {duration: 1000});
sr.reveal('.imgref1', {duration: 1000});
sr.reveal('.img-container-I img', {duration: 1000});
sr.reveal('.text-1-athom', {duration: 1000});
sr.reveal('.text-2-athom', {duration: 1000});
sr.reveal('.img-athom', {duration: 1000});
sr.reveal('.video-duvida', {duration: 1000});
sr.reveal('.box-duvidas', {duration: 1000});
sr.reveal('.content-box-qmsomos', {duration: 1000});
sr.reveal('.box-qmsomos', {duration: 1000});
sr.reveal('.box-rdsociais', {duration: 1000});

const btn = document.getElementById("btnup");

btn.addEventListener("click", function(){
   window.scrollTo(0, 0)
})