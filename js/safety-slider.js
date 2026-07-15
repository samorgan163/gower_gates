const rightBtn = document.querySelector('#slider-btn-right');
const leftBtn = document.querySelector('#slider-btn-left');

const sliderContainer = document.querySelector('#slider-container');
const card = document.querySelector('.slider .card');

function updateControls() {
    const maxScroll =
        sliderContainer.scrollWidth - sliderContainer.clientWidth;

    leftBtn.disabled = sliderContainer.scrollLeft <= 0;
    rightBtn.disabled = sliderContainer.scrollLeft >= maxScroll - 1;
}

rightBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: card.getBoundingClientRect().width,
        behavior: 'smooth',
    });
});

leftBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({
        left: -card.getBoundingClientRect().width,
        behavior: 'smooth',
    });
});

sliderContainer.addEventListener('scroll', updateControls);

updateControls();