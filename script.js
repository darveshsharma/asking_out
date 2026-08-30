const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hint = document.getElementById("hint");
const success = document.getElementById("success");
const buttons = document.querySelector(".buttons");
const restart = document.getElementById("restart");

const noMessages = [
  "Are you sure? 🥺",
  "Think about it again… 💭",
  "That button looks suspiciously wrong. 🙈",
  "I can wait… but I’d rather have a YES. 😌",
  "Okay, one last chance? 🥹",
  "Pretty please? 💗"
];

let noCount = 0;

function burst(count = 30) {
  const symbols = ["♥", "♡", "💗", "✨", "💕"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "heart";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${Math.random() * 100}vw`;
    el.style.fontSize = `${12 + Math.random() * 22}px`;
    el.style.animationDuration = `${3 + Math.random() * 4}s`;
    el.style.animationDelay = `${Math.random() * .8}s`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 8000);
  }
}

noBtn.addEventListener("click", () => {
  noCount++;
  hint.textContent = noMessages[Math.min(noCount - 1, noMessages.length - 1)];

  const scale = Math.min(1 + noCount * .16, 2.1);
  yesBtn.style.transform = `scale(${scale})`;

  const x = (Math.random() - .5) * 120;
  const y = (Math.random() - .5) * 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  buttons.classList.remove("shake");
  void buttons.offsetWidth;
  buttons.classList.add("shake");

  if (noCount >= 5) {
    noBtn.textContent = "Okay… 😭";
  }
});

yesBtn.addEventListener("click", () => {
  document.querySelector("h1").style.display = "none";
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".eyebrow").style.display = "none";
  buttons.style.display = "none";
  hint.style.display = "none";
  success.hidden = false;
  burst(55);
});

restart.addEventListener("click", () => {
  location.reload();
});

setInterval(() => {
  if (!success.hidden) return;
  if (Math.random() > .45) burst(1);
}, 1200);
