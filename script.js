"use strict";

const Roll_btn = document.querySelector(".btn--roll");
const img = document.querySelector(".dice");
const hold_btn = document.querySelector(".btn--hold");
const newGame_btn = document.querySelector(".btn--new");
let activePlayer = 0;

img.classList.add("hidden");
let currentScore = 0;

let playing = true;

const switch_players = () => {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  document
    .querySelector(`.player--${activePlayer ^ 1}`)
    .classList.add("player--active");
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer ^= 1;
  currentScore = 0;
};

newGame_btn.addEventListener("click", () => {
  for (let i = 0; i < 2; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
    document.querySelector(`.player--${i}`).classList.remove("player--winner");
    document.querySelector(`.player--${i}`).classList.remove("player--active");
  }
  img.classList.add("hidden");
  document.querySelector(".player--0").classList.add("player--active");
  activePlayer = 0;
  currentScore = 0;
  playing = true;
});

hold_btn.addEventListener("click", () => {
  if (playing) {
    const total =
      parseInt(document.querySelector(`#score--${activePlayer}`).textContent) +
      parseInt(document.querySelector(`#current--${activePlayer}`).textContent);
    document.querySelector(`#score--${activePlayer}`).textContent = total;
    if (total >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      playing = false;
    } else {
      switch_players();
    }
  }
});

Roll_btn.addEventListener("click", () => {
  if (playing) {
    const randomNumber = Math.trunc(Math.random() * 6 + 1);
    if (img.classList.contains("hidden")) img.classList.remove("hidden");
    img.src = `dice-${randomNumber}.png`;
    if (randomNumber === 1) {
      switch_players();
    } else {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

const obj = {
  Fname: "anas",
  arr: ["anas", "zahrouni"],
  Lname: "zahrouni",
};

const { Fname: x, arr: y, Lname: z } = obj;

console.log(x, y, z);
