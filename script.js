function activateSigmaMode(){

  alert("🔥 অসম্ভব বলে কিছু নাই 🔥");

  document.body.style.filter = "hue-rotate(180deg)";

  document.body.style.transform = "rotate(1deg)";

  setTimeout(() => {

    document.body.style.filter = "none";

    document.body.style.transform = "rotate(0deg)";

  }, 1000);

}
