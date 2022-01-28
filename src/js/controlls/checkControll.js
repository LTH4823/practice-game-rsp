import resultMatch from "./calculControll";
import { opponentHandCheck, userHandCheck } from "./imageControll";

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

export function resultGame(num) {
  opponentCount = Math.floor(Math.random() * 3);
  resultMatch(num, opponentCount);
  userHandCheck(num);
  opponentHandCheck(opponentCount);
  resultWord(num, opponentCount);
}
