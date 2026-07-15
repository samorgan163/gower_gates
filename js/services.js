if (window.matchMedia("(hover: none)").matches) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.6
    });

    document.querySelectorAll(".service-card").forEach(card => {
        observer.observe(card);
    });
}