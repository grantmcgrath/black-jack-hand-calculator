function handValue(hand) {
  let total = 0;
  console.log(hand);
  for (var i = 0; i < hand.length; i++) {

    if (isNaN(hand[i])) {
      if (hand[i] != 'A') {
        total += 10;
      }
    } else {
      total += +hand[i];
    }
  }
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      if (total > 11) {
        total += 1;
      } else {
        total += 11;
      }
    }
  }
  console.log(total);
  return total;
}
