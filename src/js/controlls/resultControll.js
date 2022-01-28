import { userResult, opponentResult } from "../parameter/parameter.js";
import { userHandCheck, opponentHandCheck } from "./imageControll.js";

let userCount = 0,
  opponentCount = 0;

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

export function resultMatch(num1, num2) {
  if (num1 == 0 && num2 == 2) {
    num2 -= 3;
  } else if (num1 == 2 && num2 == 0) {
    num1 -= 3;
  } else {
  }
  return (userCount = num1), (opponentCount = num2);
}

export function resultGame(num) {
  opponentCount = Math.floor(Math.random() * 3);
  resultMatch(num, opponentCount);
  userHandCheck(num);
  opponentHandCheck(opponentCount);
  resultWord(num, opponentCount);
}
