const startBtn = document.querySelector(".start-btn");
const modalWindow = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
// cancel modal window
const cancelModalWindow = document.querySelector(".btn-cancel");
const closeModalWindow = document.querySelector(".close-btn");
//  increment decrement number of players
const numberBtnMinus = document.querySelector(".number-btn-minus");
const numberBtnPlus = document.querySelector(".number-btn-plus");
// display of number
const playerNumberDisplay = document.querySelector(".number-display");
// error
const playerInputError = document.querySelector(".input-error");

// start game
const startGame = document.querySelector(".btn-confirm");

// starter page wrapper
const startingPageWrapper = document.querySelector(".start-page-wrapper");

const gameCards = document.querySelector(".spy-card");

const mainGameWrapper = document.querySelector(".main-game-wrapper");

let playerNumber = 4;
// console.log(playerNumber);
const words = [
  "chocolate factory",
  "airport",
  "bank",
  "museum",
  "hotel",
  "restaurant",
  "school",
  "stadium",
  "library",
  "hospital",
];

// Open modal window
const openModalWindowFunction = function () {
  modalWindow.classList.add("active");
  backDrop.classList.add("active");
};
// Close modal window
const closeModalWindowFunction = function () {
  modalWindow.classList.remove("active");
  backDrop.classList.remove("active");
  playerInputError.classList.remove("shake");
  playerInputError.textContent = "";
};
// error if player number is not between 3-10
const minPlayer = 3;
const maxPLayer = 10;
const invalidPlayerError = function () {
  playerInputError.classList.add("shake");
  playerInputError.textContent = "Must be 3–10 players.";
};

startBtn.addEventListener("click", openModalWindowFunction);
cancelModalWindow.addEventListener("click", closeModalWindowFunction);
closeModalWindow.addEventListener("click", closeModalWindowFunction);
// close modal window if clicked anything outside modal window
backDrop.addEventListener("click", closeModalWindowFunction);

// players must be between 3-10. change player number ++ --
numberBtnMinus.addEventListener("click", function () {
  if (playerNumber > minPlayer) {
    playerNumberDisplay.textContent--;
    playerNumber--;
  } else {
    invalidPlayerError();
  }
});
numberBtnPlus.addEventListener("click", function () {
  if (playerNumber < maxPLayer) {
    playerNumberDisplay.textContent++;
    playerNumber++;
  } else {
    invalidPlayerError();
  }
});

// starting main game page
const startGameFunction = function () {
  mainGameWrapper.innerHTML = "";
  // start game and dissapear lobby/starting page
  startingPageWrapper.style.display = "none";
  mainGameWrapper.style.display = "block";

  const randomWord = words[Math.floor(Math.random() * words.length)];
  let html = `   
  <div class="spy-card">
  <p class="label">tap to start game</p>
    <p class="main-word"></p>
    <p class="tap"></p>
    </div>`;
  mainGameWrapper.insertAdjacentHTML("beforeend", html);

  const card = document.querySelector(".spy-card");
  const label = document.querySelector(".label");
  const mainWord = document.querySelector(".main-word");
  const tapText = document.querySelector(".tap");

  let spyNumber = Math.floor(Math.random() * playerNumber + 1);
  console.log("spy is ", spyNumber);
  let state = 0;
  let currentPlayer = 1;

  let finishGameTap = 0;

  console.log("current state is", state);

  card.addEventListener("click", function () {
    if (!gameRunning) return;

    console.log("current player click", currentPlayer);

    if (currentPlayer > playerNumber) {
      // mainWord.style.display = "none";
      // label.style.display = "none";
      // mainWord.textContent = "zero";

      finishGameTap++;
      console.log("finish game if you tap screen 3 times ", finishGameTap);
      if (finishGameTap === 3) {
        startingPageWrapper.style.display = "block";
        mainGameWrapper.style.display = "none";
        gameRunning = false;
        finishGameTap = 0;
        currentPlayer = 1;
        state = 0;
        mainGameWrapper.innerHTML = "";
        // close modal window and resetting everything
        modalWindow.classList.remove("active");
        backDrop.classList.remove("active");
        playerInputError.classList.remove("shake");
        playerInputError.textContent = "";
      }
      return;
    }

    // Reveal
    if (state === 0) {
      label.style.display = "block";
      mainWord.style.display = "block";
      tapText.style.display = "block";
      // label.textContent = "Word:";
      // mainWord.textContent = randomWord;
      if (currentPlayer === spyNumber) {
        label.style.display = "none";
        mainWord.style.display = "block";
        mainWord.textContent = "spy";
      } else {
        label.textContent = "Word:";
        mainWord.textContent = randomWord;
      }
      tapText.textContent = "Tap to hide";
      state = 1;
      return;
    }
    // hide
    if (state === 1) {
      label.style.display = "none";
      mainWord.style.display = "none";
      currentPlayer++;
      state = 0;
      if (currentPlayer > playerNumber) {
        mainWord.style.display = "none";
        // mainWord.textContent = "Game finished!";
        tapText.textContent = "Tap 3 times to return to lobby";
        return;
      }
      tapText.textContent = "Tap to Reveal";
    }
  });

  // console.log(finishGameTap);
};
let gameRunning = false;
startGame.addEventListener("click", function () {
  if (gameRunning) return;
  gameRunning = true;
  startGameFunction();
});

// finish game and go back to lobby/starting page
