import { resultGame } from "./resultControll.js";

const scissorsHand = () => resultGame(0);
const rackHand = () => resultGame(1);
const paperHand = () => resultGame(2);

export function handContraller(event) {
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
