/* ===== ENTER SITE ===== */
function enterSite() {
  const popup = document.getElementById("popup");
  popup.style.animation = "popupOut 0.5s forwards";
  setTimeout(() => popup.remove(), 500);
  playWelcome();
}

function playWelcome() {
  const msg = new SpeechSynthesisUtterance("SIGMA MODE ACTIVATED. ANANTA JALIL IS THE GOAT.");
  msg.rate = 0.9;
  msg.pitch = 0.5;
  window.speechSynthesis.speak(msg);
}

/* ===== SIGMA MODE ===== */
function activateSigmaMode() {
  sigmaCount++;
  document.getElementById("sigma-count").textContent = sigmaCount;
  document.body.classList.add("sigma-mode");
  spawnEmojiBurst();
  setTimeout(() => document.body.classList.remove("sigma-mode"), 1500);
}

let sigmaCount = 0;

/* ===== EMOJI BURST ===== */
function spawnEmojiBurst() {
  const emojis = ["🔥","💀","👑","🚀","⚡","🐐","😱","💥","🏆","😤"];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement("div");
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      position: fixed;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      font-size: ${2 + Math.random() * 3}rem;
      pointer-events: none;
      z-index: 9000;
      animation: emojifall 1.5s forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
}

/* ===== RANDOM SCREEN SHAKE ===== */
setInterval(() => {
  if (document.getElementById("popup")) return;
  document.body.style.transform =
    `translate(${Math.random() * 8 - 4}px, ${Math.random() * 8 - 4}px)`;
  setTimeout(() => document.body.style.transform = "translate(0,0)", 120);
}, 4000);

/* ===== RANDOM TITLE CHANGE ===== */
const titles = [
  "🔥 SIGMA ANANTA 🔥",
  "💀 HOLLYWOOD LEVEL 💀",
  "🚀 IMPOSSIBLE IS NOTHING 🚀",
  "👑 GOAT ENERGY 👑",
  "🐐 BANGLADESH CINEMA BOSS 🐐",
  "😱 NASA ভয় পেয়েছে 😱",
  "🔥 অসম্ভব বলে কিছু নাই 🔥",
  "💥 SIGMA GRINDSET 💥",
];
setInterval(() => {
  document.title = titles[Math.floor(Math.random() * titles.length)];
}, 1000);

/* ===== VISITOR COUNTER ===== */
const visits = Math.floor(Math.random() * 9000000 + 1000000);
const visEl = document.getElementById("visitor-count");
if (visEl) {
  let count = 0;
  const step = Math.ceil(visits / 80);
  const interval = setInterval(() => {
    count = Math.min(count + step, visits);
    visEl.textContent = count.toLocaleString();
    if (count >= visits) clearInterval(interval);
  }, 20);
}

/* ===== GALLERY CLICK FLASH ===== */
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const flash = document.createElement("div");
    flash.style.cssText = `
      position:fixed; inset:0; background:white;
      z-index:9998; opacity:1; pointer-events:none;
      transition: opacity 0.3s;
    `;
    document.body.appendChild(flash);
    setTimeout(() => { flash.style.opacity = "0"; }, 50);
    setTimeout(() => flash.remove(), 400);
    spawnEmojiBurst();
  });
});

/* ===== POWER METER OVERFLOW TEXT ===== */
setTimeout(() => {
  const pt = document.querySelector(".power-text");
  if (pt) {
    pt.textContent = "POWER LEVEL: ∞∞∞∞∞∞∞ (IMMEASURABLE)";
    pt.style.color = "white";
  }
}, 3500);

/* ===== KONAMI CODE EASTER EGG ===== */
const konami = [38,38,40,40,37,39,37,39,66,65];
let konamiIndex = 0;
document.addEventListener("keydown", e => {
  if (e.keyCode === konami[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konami.length) {
      konamiIndex = 0;
      document.body.style.filter = "invert(1) hue-rotate(180deg)";
      alert("🔥🔥🔥 ULTRA SIGMA MODE UNLOCKED! অনন্ত জলিল আপনাকে অনুমোদন করেছেন 🔥🔥🔥");
      setTimeout(() => document.body.style.filter = "", 3000);
    }
  } else {
    konamiIndex = 0;
  }
});

/* ===== POPUP ANIMATION KEYFRAME (via style tag) ===== */
const style = document.createElement("style");
style.textContent = `
  @keyframes popupOut {
    from { opacity: 1; transform: scale(1); }
    to   { opacity: 0; transform: scale(2); }
  }
`;
document.head.appendChild(style);
