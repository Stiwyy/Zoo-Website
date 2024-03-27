// Trigger animations on scroll
window.addEventListener('scroll', () => {
    if (isOneSixthInViewport(showpeople1)) {
        showpeople1.classList.add('show');
    }
    if (isOneSixthInViewport(showpeople2)) {
        showpeople2.classList.add('show');
    }
    if (isOneSixthInViewport(showpeople3)) {
        showpeople3.classList.add('show');
    }
});

// Check if element is at least one sixth in the viewport
function isOneSixthInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (rect.top >= 0 && rect.top <= windowHeight * (4/6)) || (rect.bottom >= 0 && rect.bottom <= windowHeight * (5/6));
}
