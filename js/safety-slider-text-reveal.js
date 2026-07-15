const cards = document.querySelectorAll(".safety .card-details");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
}, {
    threshold: 0.7
});

cards.forEach(card => observer.observe(card));
