/* riporto le classi che mi servono */
const arrowup = document.querySelector('.arrow-up');
const arrowdown = document.querySelector('.arrow-down');

/* scrivo il mio array */
const slidesSrc = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]

let imgonscreen = 0;

/* creo i due function per mandare avanti e indietro all'infinito le 5 foto */
function next() {
    const currentimg = document.querySelector('.slide.active');
    currentimg.classList.remove('active');
    
    if (imgonscreen == slidesSrc.length - 1) {
        imgonscreen = 0;
        
    }
    else {
        imgonscreen++;
    }
    
    const beforeimg = document.getElementsByClassName('slide');
    const nextimg = beforeimg[imgonscreen];
    nextimg.classList.add('active');
}
function before() {
    const currentimg = document.querySelector('.slide.active');
    currentimg.classList.remove('active');

    if (imgonscreen <= 0) {
        imgonscreen = slidesSrc.length - 1;

    }
    else {
        imgonscreen--;
    }

    const beforeimg = document.getElementsByClassName('slide');
    const nextimg = beforeimg[imgonscreen];
    nextimg.classList.add('active');
}
/* cliccando le frecce l'immagine andrà avanti o indietro */
arrowup.addEventListener('click', function () {
    next();
})
arrowdown.addEventListener('click', function () {
    before();
})