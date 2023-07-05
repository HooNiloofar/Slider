const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.btn-right');
const btnLeft = document.querySelector('.btn-left');
const slider = document.getElementById('slider');
const dotContainer = document.querySelector('.dot-container');


let currentSlide = 0;
let maxSlide = slides.length;
slider.style.overflow = 'hidden';


// 0  100%  200%  300%

// -100%  0  100%  200%


const GotoSlide = function (slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i-slide)}%)`;
    });
}

GotoSlide(0);

btnRight.addEventListener('click', function () {
    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    GotoSlide(currentSlide);
});

btnLeft.addEventListener('click', function () {
    if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
    } else {
        currentSlide--;
    }
    GotoSlide(currentSlide);
});

const CreateDot = function () {
    slides.forEach(function (_, i) {

        dotContainer.insertAdjacentHTML('beforeend',
            `<button class="dot" data-slide="${i}"></button>`);
    });
};

CreateDot();

dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
        const slide = e.target.dataset.slide;
        GotoSlide(slide);
        ActivateDot(slide);
    }
});

const ActivateDot = function (slide) {

    document.querySelectorAll('.dot').forEach(dot => {
        dot.classList.add('dot-active');
    });

    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('dot-active');
};
ActivateDot(0);