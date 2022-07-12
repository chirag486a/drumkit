'use strict';




/*
a = clap
s = hihat
d = kick
f = openhat
g = boom
h = ride
j = snare
k = tom
l = tink
*/


const buttons = document.querySelector(".buttons");
const button = document.querySelectorAll(".button");
const sounds = document.querySelector(".sounds");
const audio = document.querySelectorAll(".audio");
const transitionEnd = 150;
const spinner = document.querySelector(".spinner-container");



const listenerAdd = function (element, type, func) {
  element.addEventListener(type, func);
};

const buttonClick = function (e) {
  setTimeout(() => {
    buttons.querySelectorAll(".button").forEach((element) => {
      element.classList.remove("button-animation");
    });
  }, transitionEnd);
  e.preventDefault();
  if (e.target.closest(".button")) {
    const key = e.target.closest(".button").dataset.key;
    const currentAudio = new Audio(document.querySelector(`[data-key="${key}"]`).src);
    currentAudio.play();
    if (!buttons.querySelector(`[data-key="${key}"]`).classList) return;
    buttons.querySelector(`[data-key="${key}"]`).classList.add("button-animation");
  }
};

const soundLoad = function (e) {
  console.log(e);
  new Audio(e.target);
};

const renderHTML = function () {
  const html = `
      <button data-key="65" class="button a ">
        <kbd>a</kbd><span>clap</span>
      </button>
      <button data-key="83" class="button s">
        <kbd>s</kbd><span>hihat</span>
      </button>
      <button data-key="68" class="button d">
        <kbd>d</kbd><span>kick</span>
      </button>
      <button data-key="70" class="button f">
        <kbd>f</kbd><span>openhat</span>
      </button>
      <button data-key="71" class="button g">
        <kbd>g</kbd><span>boom</span>
      </button>
      <button data-key="72" class="button h">
        <kbd>h</kbd><span>ride</span>
      </button>
      <button data-key="74" class="button j">
        <kbd>j</kbd><span>snare</span>
      </button>
      <button data-key="75" class="button k">
        <kbd>k</kbd><span>tom</span>
      </button>
      <button data-key="76" class="button l">
        <kbd>l</kbd><span>tink</span>
      </button>
  `;
  buttons.innerHTML = "";
  buttons.insertAdjacentHTML("afterbegin", html);
  document.querySelector("h1").innerHTML = "Beat It";
};


const keyPressFunc = function (e) {
  setTimeout(() => {
    buttons.querySelectorAll(".button").forEach((element) => {
      element.classList.remove("button-animation");
    });
  }, transitionEnd);
  if (
    (e.which === 65) ||
    (e.which === 83) ||
    (e.which === 68) ||
    (e.which === 70) ||
    (e.which === 71) ||
    (e.which === 72) ||
    (e.which === 74) ||
    (e.which === 75) ||
    (e.which === 76)) {
    const currentAudio = new Audio(sounds.querySelector(`[data-key="${e.which}"]`).src);
    currentAudio.play();
    buttons.querySelector(`[data-key="${e.which}"]`).classList.add("button-animation");
  }
};
function removeSpinner() {
  spinner.classList.add("hide-spinner");
}
const init = function () {
  buttons.addEventListener("click", buttonClick);
  audio.forEach(element => {
    element.addEventListener("loadeddata", function (e) {
      renderHTML();
      window.addEventListener("keydown", keyPressFunc);
      removeSpinner();
    });
  });
};
init();
