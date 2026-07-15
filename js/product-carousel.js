const carousel = document.querySelector('.product-carousel');

const btnRight = document.querySelector('#product-carousel-btn-right');
const btnLeft = document.querySelector('#product-carousel-btn-left');

const btnClose = document.querySelector('#product-carousel-btn-close');

const gallery = document.querySelector('.product-gallery');

/* Load images */
const images = [
    {
        thumb: "../images/swing-gate.jpg",
        full: "../images/swing-gate.jpg",
        alt: "Swing gate"
    },
    {
        thumb: "./images/swing-gate.jpg",
        full: "./images/swing-gate.jpg",
        alt: "Swing gate"
    },
    {
        thumb: "/images/swing-gate.jpg",
        full: "/images/swing-gate.jpg",
        alt: "Swing gate"
    },
    {
        thumb: "images/swing-gates.jpg",
        full: "images/swing-gate.jpg",
        alt: "Swing gate"
    },
    {
        thumb: "/images/swing-gate.jpg",
        full: "/images/swing-gate.jpg",
        alt: "Swing gate"
    },
    {
        thumb: "images/swing-gates.jpg",
        full: "images/swing-gate.jpg",
        alt: "Swing gate"
    },
];

// fill gallery
images.forEach((image, index) => {

    const img = document.createElement("img");

    img.src = image.thumb;
    img.alt = image.alt;

    img.dataset.index = index;

    img.addEventListener('click', () => {
        openCarousel(index);
    })

    gallery.appendChild(img);
});

// fill carousel
images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";

    const img = document.createElement("img");
    img.src = image.full;
    img.alt = image.alt;

    slide.appendChild(img);
    carousel.appendChild(slide);
})


/* Controls */
btnRight.addEventListener('click', () => {
    carousel.scrollBy({
        left: carousel.clientWidth,
        behavior: 'smooth',
    });
});

btnLeft.addEventListener('click', () => {
    carousel.scrollBy({
        left: -carousel.clientWidth,
        behavior: 'smooth',
    });
});

btnClose.addEventListener('click', () => {
    carousel.classList.add('hidden');
});

function openCarousel(index) {
    carousel.classList.remove("hidden");
    carousel.scrollTo({
        left: index * window.innerWidth,
        behavior: "instant"
    });
}
