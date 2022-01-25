const main = document.querySelector("#main"),
  user = main.querySelector("#user"),
  opponent = main.querySelector("#opponent"),
  userResult = main.querySelector(".user_result"),
  opponentResult = main.querySelector(".opponent_result"),
  userImg = user.querySelector(".user_img"),
  opponentImg = opponent.querySelector(".opponet_img"),
  btns = main.querySelector(".board_btns"),
  rack = btns.querySelector(".rack"),
  scissors = btns.querySelector(".scissors"),
  paper = btns.querySelector(".paper");

let userCount = 0,
  opponentCount = 0,
  hand;

const scissorsHand = () => resultGame(0);
const rackHand = () => resultGame(1);
const paperHand = () => resultGame(2);

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

function opponentHandCheck(num) {
  handCheck(num);
  opponentImg.src = "../img/" + hand + ".png";
}

function userHandCheck(num) {
  handCheck(num);
  userImg.src = "../img/" + hand + ".png";
}

function resultMatch(num1, num2) {
  if (num1 == 0 && num2 == 2) {
    num2 -= 3;
  } else if (num1 == 2 && num2 == 0) {
    num1 -= 3;
  } else {
  }
  return (userCount = num1), (opponentCount = num2);
}

function resultWord() {
  if (userCount < opponentCount) {
    userResult.innerText = "lose";
    opponentResult.innerText = "win";
  } else if (userCount > opponentCount) {
    userResult.innerText = "win";
    opponentResult.innerText = "lose";
  } else if (userCount == opponentCount) {
    userResult.innerText = "drow";
    opponentResult.innerText = "drow";
  } else {
    console.log("error!");
    return;
  }
}

function resultGame(num) {
  opponentCount = Math.floor(Math.random() * 3);
  resultMatch(num, opponentCount);
  userHandCheck(num);
  opponentHandCheck(opponentCount);
  resultWord(num, opponentCount);
}

function handContraller(event) {
  switch (event.target.className) {
    case "rack":
      rackHand();
      break;
    case "scissors":
      scissorsHand();
      break;
    case "paper":
      paperHand();
      break;
    default:
      break;
  }
}

function init() {
  // scissors.addEventListener("click",scissorsHand);
  // rack.addEventListener("click",rackHand);
  // paper.addEventListener("click",paperHand);
  btns.addEventListener("click", handContraller);
}

init();
