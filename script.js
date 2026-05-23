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

function closePopup(){

  document.getElementById("popup").style.display =
  "none";

}

setInterval(() => {

  document.body.style.transform =
  `translate(${Math.random()*10-5}px,
  ${Math.random()*10-5}px)`;

  setTimeout(() => {

    document.body.style.transform =
    "translate(0,0)";

  },100);

},3000);

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
