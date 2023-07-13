const sliders = document.querySelectorAll('.slider__item');
const arraySlider = Array.from(sliders);
let activeSlideIndex = 0;

function getNextSlide() {
    if (activeSlideIndex === arraySlider.length - 1) {
        activeSlideIndex = 0;
        arraySlider[arraySlider.length - 1].classList.remove('slider__item_active');
    } else {
        arraySlider[activeSlideIndex].classList.remove('slider__item_active');
        activeSlideIndex ++;   
    }
    arraySlider[activeSlideIndex].classList.add('slider__item_active');
}

function getPreviousSlide() {
    if (activeSlideIndex === 0) {
        activeSlideIndex = arraySlider.length - 1;
        arraySlider[0].classList.remove('slider__item_active');
    } else {
        arraySlider[activeSlideIndex].classList.remove('slider__item_active');
        activeSlideIndex --;   
    }
    arraySlider[activeSlideIndex].classList.add('slider__item_active');
}

const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');
arrowNext.onclick = getNextSlide;
arrowPrev.onclick = getPreviousSlide;

