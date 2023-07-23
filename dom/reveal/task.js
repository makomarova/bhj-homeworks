const element = document.querySelector('.reveal');

document.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    
    if (elementTop < viewportHeight) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    }

    if (element.getBoundingClientRect().bottom <= 0) {
        element.classList.remove('reveal_active');
    }
});