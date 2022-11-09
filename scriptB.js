"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const btnCheck = document.querySelector(".btn--check");

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  document.querySelector(".player--active").style.backgroundColor =
    "rgba(255, 255, 255, 0.4)";
  document.querySelector(".player--1").style.backgroundColor =
    "rgba(255, 255, 255, 0.4)";
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 32) + 1;
  if (currentScore < 21 && playing) {
    // 1. Generating a random dice roll

    // 2. Display dice
    diceEl.classList.remove("hidden");
    currentScore = currentScore;

    diceEl.src = `cards/card-${dice}.png`;

    if (dice >= 1 && dice <= 4) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 11;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 5 && dice <= 8) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 3;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 9 && dice <= 12) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 2;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 13 && dice <= 16) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 10;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 17 && dice <= 20) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 9;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 21 && dice <= 24) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 4;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 25 && dice <= 28) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 8;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (dice >= 29 && dice <= 32) {
      // 3. Check for rolled 1
      // Add dice to current score
      currentScore += 7;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
  if (currentScore === 21) {
    console.log("PObjedio si");
    document.querySelector(".player--active").style.backgroundColor = "#00ff15";
  }
  if (currentScore > 21) {
    console.log("Prešao si preko 21 ");
    init();
  }
});

btnHold.addEventListener("click", function () {
  if (scores[0] < 21 && scores[1] < 21) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    switchPlayer();
    // }
    // else if (scores[0] === 21 && scores[1]==21); {
    //   console.log("Pobjedio si");
    //
  }
  if (scores[0] === scores[1]) {
    console.log("IGRAČ 1 i IGRAČ 2 imaju jednako bodova");
    document.querySelector(".player--1").style.backgroundColor = "#ff0000";
    document.querySelector(".player--0").style.backgroundColor = "#ff0000";
    alert("Igrači imaju jednaki broj bodova, igraj dalje ili zovi izjednačeno");
  }
  if (scores[0] > 21) {
    console.log("Prešao si preko 21 majmune, igrač 2 pobjeđuje");
    document.querySelector(".player--1").style.backgroundColor =
      " rgba(21, 249, 0, 0.4)";
  }
  if (scores[1] > 21) {
    console.log("Prešao si preko 21 , igrač 1 pobjeđuje");
    document.querySelector(".player--active").style.backgroundColor =
      " rgba(21, 249, 0, 0.4)";
  }
  if (scores[0] === 21) {
    console.log("POBJEDIO je igrač 1 ");
    document.querySelector(".player--0").style.backgroundColor = "#00ff15";
  }
  if (scores[1] === 21) {
    console.log("POBJEDIO je igrač 2 SI");
    document.querySelector(".player--1").style.backgroundColor = "#00ff15";
  }
});

btnNew.addEventListener("click", init);

btnCheck.addEventListener("click", function () {
  if (scores[0] > scores[1]) {
    console.log(` PRVI ${scores[0]}`);
    console.log(` DRUGI ${scores[1]}`);
    console.log(`Pobjednik je IGRAC JEDAN`);
    document.querySelector(".player--0").style.backgroundColor = "#60b347";
  } else if (scores[0] < scores[1]) {
    console.log(` PRVI ${scores[0]}`);
    console.log(` DRUGI ${scores[1]}`);
    console.log(`Pobjednik je IGRAC DVA`);
    document.querySelector(".player--1").style.backgroundColor = "#60b347";
  } else {
    console.log(` PRVI ${scores[0]}`);
    console.log(` DRUGI ${scores[1]}`);
    console.log(`Igraci imaju jednako bodova`);
    document.querySelector(".player--1").style.backgroundColor = "#ff0000";
    document.querySelector(".player--active").style.backgroundColor = "#ff0000";
    alert("Igrači imaju jednako bodova, Izjednačeno je");
  }
});
