import { handContraller } from "./controlls/handControll.js";

const btns = document.querySelector(".board_btns");

function init() {
  btns.addEventListener("click", handContraller);
}

init();
