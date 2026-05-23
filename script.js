function activateSigmaMode(){

  alert("🔥 অসম্ভব বলে কিছু নাই 🔥");

  document.body.style.filter = "hue-rotate(180deg)";

  document.body.style.transform =
  "rotate(1deg) scale(1.02)";

  setTimeout(() => {

    document.body.style.filter = "none";

    document.body.style.transform =
    "rotate(0deg) scale(1)";

  },1500);

}

/* POPUP CLOSE */

function closePopup(){

  const popup =
  document.getElementById("popup");

  popup.style.animation =
  "popupDisappear 0.5s forwards";

  setTimeout(() => {

    popup.style.display = "none";

  },500);

}

/* RANDOM SCREEN SHAKE */

setInterval(() => {

  if(
    document.getElementById("popup").style.display
    !== "none"
  ){
    return;
  }

  document.body.style.transform =
  `translate(${Math.random()*6-3}px,
  ${Math.random()*6-3}px)`;

  setTimeout(() => {

    document.body.style.transform =
    "translate(0,0)";

  },100);

},3000);

/* RANDOM TITLE CHANGE */

const titles = [

  "🔥 SIGMA ANANTA 🔥",
  "💀 HOLLYWOOD LEVEL 💀",
  "🚀 IMPOSSIBLE IS NOTHING 🚀",
  "👑 GOAT ENERGY 👑"

];

setInterval(() => {

  document.title =
  titles[Math.floor(Math.random()*titles.length)];

},1000);
