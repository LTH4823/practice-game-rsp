let userCount = 0,
  opponentCount = 0;

export function resultMatch(num1, num2) {
  if (num1 == 0 && num2 == 2) {
    num2 -= 3;
  } else if (num1 == 2 && num2 == 0) {
    num1 -= 3;
  } else {
  }
  return (userCount = num1), (opponentCount = num2);
}
