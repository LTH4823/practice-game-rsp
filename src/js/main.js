import handContraller from "./controlls/handControll";

const main = document.querySelector("#main"),
  user = main.querySelector("#user"),
  userResult = main.querySelector(".user_result"),
  userImg = user.querySelector(".user_img"),
  opponent = main.querySelector("#opponent"),
  opponentResult = main.querySelector(".opponent_result"),
  opponentImg = opponent.querySelector(".opponet_img"),
  btns = main.querySelector(".board_btns");

function init() {
  btns.addEventListener("click", handContraller);
}

init();
