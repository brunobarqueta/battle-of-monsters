export function diceFacesCalculator(dice1: number, dice2: number, dice3: number): number {
  if (dice1 < 1 || dice1 > 6 || dice2 < 1 || dice2 > 6 || dice3 < 1 || dice3 > 6) {
    throw 'Dice out of number range';
  }

  // first case
  if (dice1 === dice2 && dice1 === dice3) {
    return dice1 * 3;
  }
  // seconde case
   // if (dice1 === dice2 || dice1 === dice3 || dice2 === dice3) {
  //   const twoEquals = [dice1, dice2, dice3].filter(dice => [dice1, dice2, dice3].filter(d => d === dice).length === 2);
  //   return twoEquals[0] * 2;
  // }

  if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3) {
      const dices = [dice1, dice2, dice3];
      const hasTwoEquals = dices.filter(el => {
        return dices.filter(dice => dice == el).length == 2
      })
      console.log(hasTwoEquals)
      return hasTwoEquals[0] * 2;
  }
  // third case
  return Math.max(dice1, dice2, dice3);
}