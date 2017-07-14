/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let handValue = 0;

  for (var i = 0; i < hand.length; i++) {

    // If the card is not an Ace, Jack, Queen, or King, then the value of the card is the same as the card number
    if (hand[i] != "A" && hand[i] != "J" && hand[i] != "Q" && hand[i] != "K") {
      handValue += +hand[i];
      // If not an Ace, then the royal cards are 10 points
    } else if (hand[i] != "A") {
      handValue += 10;
    }
  }

  // If the total of the hand is less then 11, then make the Ace 11 points, else score the Ace as 1 point

  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      if (handValue < 11) {
        handValue += 11;
      } else {
        handValue += 1;
      }
    }
  }

  // console.log(hand);
  console.log(handValue);
  return handValue;
}

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
