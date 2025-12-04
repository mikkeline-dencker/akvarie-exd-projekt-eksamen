"use strict";
let currentFishSound = null; // holder styr på den aktive fiskelyd

// DOM Elementer
const getCrab = document.getElementById("crab");
const getNemoFish = document.getElementById("nemo");
const getPufferFish = document.getElementById("pufferfish");
const getShark = document.getElementById("shark");
const getStingRay = document.getElementById("stingray");
const getTurtle = document.getElementById("turtle");

//Dataobjekt med information om hver fisk
const fishInfo = {
  crab: {
    title: "KRABBE",
    text: "Jeg er en krabbe. Jeg bor på stranden og i vandet, og jeg går sidelæns. Jeg har et hårdt skjold, som beskytter mig, og når jeg vokser, skifter jeg det gamle skjold ud med et nyt. Jeg spiser næsten alt!",
  },
  nemo: {
    title: "KLOVNFISK",
    text: "Jeg er en klovnfisk. Jeg har orange og hvide striber, næsten som en tiger i vandet. Måske har du set mig i filmen Find Nemo? Jeg bor i en søanemone, hvor jeg elsker at svømme og lege med mine venner.",
  },
  pufferfish: {
    title: "PUFFERFISK",
    text: "Jeg er en pufferfisk, og jeg bliver oppustet, når jeg er stresset! Jeg kan blive op til tre gange min normale størrelse, så jeg ligner en ballon. Selvom jeg ser sød ud, er jeg faktisk et af havets mest dødelige dyr.",
  },
  shark: {
    title: "HVIDHAJ",
    text: "Jeg er en hvidhaj. Jeg er en stor fisk, der bor i havet. Du kan finde mig i varme have over hele verden. Jeg kan svømme meget hurtigt! Selvom jeg ser farlig ud, er jeg mest forvirret. Nogle gange tror jeg, at mennesker er sæler.",
  },
  stingray: {
    title: "ROKKE",
    text: "Jeg er en rokke. Jeg er næsten lige så flad som en pandekage, og jeg elsker at gemme mig under sandet. Jeg har en lang hale, som kan være giftig, og jeg bruger den til at forsvare mig selv.",
  },
  turtle: {
    title: "SKILDPADDE",
    text: "Jeg er en skildpadde. Jeg er et roligt og venligt dyr, som for det meste lever i de varme have. Jeg har ikke specielt travlt i livet - jeg er nemlig ikke hurtig. Men hvis jeg endelig skal skynde mig, kan jeg svømme ret hurtigt!",
  },
};

// Opretter et lyd-objekt og tildeler source til den specifikke lydfil i mappen "sound"
const soundCrab = new Audio();
soundCrab.src = "sound/crab.wav";

const soundNemo = new Audio();
soundNemo.src = "sound/nemo.wav";

const soundPuffer = new Audio();
soundPuffer.src = "sound/pufferfish.wav";

const soundShark = new Audio();
soundShark.src = "sound/shark.wav";

const soundStingray = new Audio();
soundStingray.src = "sound/stingray.wav";

const soundTurtle = new Audio();
soundTurtle.src = "sound/turtle.wav";

const soundAquaman = new Audio();
soundAquaman.src = "sound/aquaman.wav";

// Funktion: vis popup med HTML-indhold
function showFishPopup(html) {
  const popup = document.getElementById("fish-popup");
  if (!popup) return;
  popup.querySelector(".popupBody").innerHTML = html;
  popup.classList.add("is-visible");
}

// Funktion: skjul popup
function hideFishPopup() {
  const popup = document.getElementById("fish-popup");
  if (!popup) return;
  popup.classList.remove("is-visible");
  popup.setAttribute("aria-hidden", "true");
  // Stop lyd, hvis en spiller
  if (currentFishSound) {
    currentFishSound.pause();
    currentFishSound.currentTime = 0;
  }
}

// Luk-knap
const closeBtn = document.querySelector(".closeBtn");
if (closeBtn) closeBtn.addEventListener("click", hideFishPopup);

// Binder click-handlere til alle fisk ved at bruge deres id'er
// Når der klikkes, hentes teksten fra fishInfo og sendes til showFishPopup
["crab", "nemo", "pufferfish", "shark", "stingray", "turtle"].forEach((id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("click", () => {
    const info = fishInfo[id];
    if (!info) return;
    // Vis popup
    showFishPopup(`<strong>${info.title}</strong><p>${info.text}</p>`);
    // Stop evt. tidligere lyd
    if (currentFishSound) {
      currentFishSound.pause();
      currentFishSound.currentTime = 0;
    }
    switch (id) {
      case "crab":
        currentFishSound = new Audio("sound/crab.wav");
        break;
      case "nemo":
        currentFishSound = new Audio("sound/nemo.wav");
        break;
      case "pufferfish":
        currentFishSound = new Audio("sound/pufferfish.wav");
        break;
      case "shark":
        currentFishSound = new Audio("sound/shark.wav");
        break;
      case "stingray":
        currentFishSound = new Audio("sound/stingray.wav");
        break;
      case "turtle":
        currentFishSound = new Audio("sound/turtle.wav");
        break;
    }
    // Afspil lyd
    currentFishSound.play();
  });
});

// Henter DOM-elementer til akvariemanden
const aquaman = document.getElementById("aquaman");
const cta = document.querySelector(".aquaman-cta");
const bubble = document.getElementById("aquamanBubble");

// Når man klikker på manden
aquaman.addEventListener("click", function () {
  // Vis boblen
  bubble.style.display = "block";

  // Spil lyd
  soundAquaman.currentTime = 0;
  soundAquaman.play();

  // Skjul boblen igen efter 7 sekunder
  setTimeout(function () {
    bubble.style.display = "none";
  }, 4100);
});
