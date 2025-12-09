"use strict";

const inputText = document.querySelector(".main-header-section-input");
const addButton = document.querySelector(".main-header-sections-add-btn");
const removeButton = document.querySelector(".main-header-sections-remove-btn");

const checkSection = document.querySelector(".check-section");

let id = 0;
// let wraps = [];

const addCheckOnClick = addButton.addEventListener("click", function () {
  if (inputText.value === "") return;
  id++;
  const html = ` 
  <div class="checkbox-wrapper" id="scales${id}">
  <input type="checkbox" name="scales" checked />
  <label for="scales1">${inputText.value}</label>
  </div>
    `;
  checkSection.insertAdjacentHTML("beforeend", html);
  //   wraps.push(html);
  //   console.log(wraps);
  inputText.value = "";
  //
  //
});

removeButton.addEventListener("click", function () {
  if (inputText === "" && inputText === 0) return;
  const htmlRemove = document.getElementById(`scales${id}`);
  if (htmlRemove) {
    htmlRemove.remove();
    id--;
  }
});
