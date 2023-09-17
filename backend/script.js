function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./imagens/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./imagens/close_white_36dp.svg"
    }
}

window.sr = ScrollReveal({ reset: true });

sr.reveal('.perguntasFreq-section', {duration: 1000});
sr.reveal('#h2-qmsomos', {duration: 1000});
sr.reveal('.container-qmsomos', {duration: 1000});
sr.reveal('.box-fotos', {duration: 1000});

