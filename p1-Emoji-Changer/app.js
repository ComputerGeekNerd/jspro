const closedEmoji = document.querySelector('.closed');
const openEmoji = document.querySelector('.open');

//Add event listener
closedEmoji.addEventListener('click', () => {
     if(openEmoji.classList.contains('open')) {
          openEmoji.classList.add('active');
          closedEmoji.classList.remove('active');
     }
});

openEmoji.addEventListener('click', () => {
     if(closedEmoji.classList.contains('closed')) {
          closedEmoji.classList.add('active');
          openEmoji.classList.remove('active');
     }
});