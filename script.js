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
  const randomWord = words[Math.floor(Math.random() * words.length)];
  let html = `   
  <div class="spy-card">
    <p class="label">word:</p>
    <p class="main-word">${randomWord}</p>
    <p class="tap">tap to hide</p>
    </div>`;
  mainGameWrapper.insertAdjacentHTML("beforeend", html);

  const card = document.querySelector(".spy-card");
  const label = document.querySelector(".label");
  const mainWord = document.querySelector(".main-word");
  const tapText = document.querySelector(".tap");

  startingPageWrapper.style.display = "none";
  mainGameWrapper.style.display = "block";

  let hidden = false;
  // while (currentIndex < playerNumber) {
  let currentIndex = 0;
  card.addEventListener("click", function () {
    currentIndex++;
    console.log(currentIndex);
    hidden = !hidden;
    if (currentIndex / 2 < playerNumber) {
      if (hidden) {
        label.style.display = "none";
        mainWord.style.display = "none";
        tapText.textContent = "tap to appear";
      } else {
        label.style.display = "block";
        mainWord.style.display = "block";
        tapText.textContent = "tap to hide";
      }
    } else {
      // add new card with timer
      alert("no more player");
    }
  });
};
startGame.addEventListener("click", startGameFunction);
