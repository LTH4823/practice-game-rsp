const user = document.querySelector("#user"),
  userResult = user.querySelector(".user_result"),
  userImg = user.querySelector(".user_img"),
  opponent = document.querySelector("#opponent"),
  opponentResult = opponent.querySelector(".opponent_result"),
  opponentImg = opponent.querySelector(".opponet_img");

let hand;

function handCheck(num) {
  switch (num) {
    case -1:
      hand = "paper";
      break;
    case 0:
      hand = "scissors";
      break;
    case 1:
      hand = "rack";
      break;
    case 2:
      hand = "paper";
      break;
    default:
      console.log("error");
      break;
  }
}
export function opponentHandCheck(num) {
  handCheck(num);
  opponentImg.src = "../src/img/" + hand + ".png";
}
export function userHandCheck(num) {
  handCheck(num);
  userImg.src = "../src/img/" + hand + ".png";
}
