const btnclr = document.getElementById("btn-clr");

btnclr.addEventListener('click', () => {
     document.body.style.background = randBg();
});

function randBg () {
     return `hsl(${Math.floor(Math.random() * 100)}, 100%, 50%)`;
}