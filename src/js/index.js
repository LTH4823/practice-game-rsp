import { handContraller } from "./controlls/handControll.js";
import { btns } from "./parameter/parameter.js";

function init() {
  btns.addEventListener("click", handContraller);
}

init();
