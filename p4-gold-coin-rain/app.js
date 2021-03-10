function generateGold() {
     const crown = document.createElement("div");
     crown.classList.add("crown");

     crown.innerText = "👑";
     crown.style.right = Math.random()* 100 + "vw";
     crown.style.animationDuration = Math.random() *2 + 3 + "s";

     document.body.appendChild(crown);

     setTimeout(() => {
          crown.remove();
     }, 5000);
}

setInterval(generateGold, 300);