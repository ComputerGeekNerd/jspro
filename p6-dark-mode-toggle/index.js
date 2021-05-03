const btn = document.getElementById('dark-mod');
const bg = document.getElementById('screen');

btn.addEventListener('click', () => {
     if(bg.classList.contains('lights')) {
          bg.classList.remove('lights');
          bg.classList.add('darks');
     }
     else {
          bg.classList.remove('darks');
          bg.classList.add('lights');
     }
});