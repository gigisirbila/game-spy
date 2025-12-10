const startBtn = document.querySelector(".start-btn");
const modalWindow = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const cancelModalWindow = document.querySelector(".btn-cancel");
const closeModalWindow = document.querySelector(".close-btn");
const numberBtnMinus = document.querySelector(".number-btn-minus");
const numberBtnPlus = document.querySelector(".number-btn-plus");
const playerNumberDisplay = document.querySelector(".number-display");
const playerInputError = document.querySelector(".input-error");

// Open modal window
const openModalWindowFunction = function () {
  modalWindow.classList.add("active");
  backDrop.classList.add("active");
};
// Close modal window
const closeModalWindowFunction = function () {
  modalWindow.classList.remove("active");
  backDrop.classList.remove("active");
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

// players must be between 3-10
numberBtnMinus.addEventListener("click", function () {
  if (playerNumberDisplay.textContent > minPlayer) {
    playerNumberDisplay.textContent--;
  } else {
    invalidPlayerError();
  }
});
numberBtnPlus.addEventListener("click", function () {
  if (playerNumberDisplay.textContent < maxPLayer) {
    playerNumberDisplay.textContent++;
  } else {
    invalidPlayerError();
  }
});
