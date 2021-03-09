const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
     circle.classList.add('hover');
});

circle.addEventListener('mouseleave', () => {
     circle.classList.remove('hover');
});