console.log("it works");

values = ["13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
suits = ["spades", "hearts", "diamonds", "clubs"];

const cards = [];
for (let s = 0; s < suits.length; s++) {
  for (let v = 1; v < 14; v++) {
    //     const value = values[v];
    const suit = suits[s];
    cards.push({ v, suit });
  }
}
console.log(cards);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(cards);

console.log(cards);

let playerOneDeck = cards.slice(0, 26);
let playerTwoDeck = cards.slice(26);

console.log(playerOneDeck);
console.log(playerTwoDeck);

// making cards to be random when start of the game
// 26 cards each player

let playerOneValue = playerOneDeck[0].v;
let playerOneSuit = playerOneDeck[0].suit;

let playerTwoValue = playerTwoDeck[0].v;
let playerTwoSuit = playerTwoDeck[0].suit;
// console.log(playerOneValue);
// console.log(playerTwoValue);
document.body.onload = addElement;

function addElement() {
  // create a new div element for player 1
  const newDiv = document.createElement("div");
  newDiv.id = "playerOne";

  const playerOneCard = document.createElement("img");
  playerOneCard.setAttribute(
    "src",
    "./assets/images/" + playerOneSuit + "-" + playerOneValue + ".svg"
  );
  playerOneCard.id = "playerOneCard";

  newDiv.appendChild(playerOneCard);

  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

  // create a new div element for player 2
  const div2 = document.createElement("div");
  div2.id = "playerTwo";

  const playerTwoCard = document.createElement("img");
  playerTwoCard.setAttribute(
    "src",
    "./assets/images/" + playerTwoSuit + "-" + playerTwoValue + ".svg"
  );
  playerTwoCard.id = "playerTwoCard";

  div2.appendChild(playerTwoCard);

  const currentDiv2 = document.getElementById("div1");
  document.body.insertBefore(div2, currentDiv2);
}

let playerOneCard = playerOneDeck.shift();

let playerTwoCard = playerTwoDeck.shift();
tieCards = [];

console.log(playerOneCard);
console.log(playerTwoCard);

function gameLogic() {
  if (playerOneCard.v > playerTwoCard.v) {
    console.log("playerOne wins");
    if (tieCards.length > 0) {
      tieCards.forEach(card => playerOneDeck.push(card));
      tieCards = [];
    }
    playerOneDeck.push(playerOneCard, playerTwoCard);
    // playerOneDeck.push(cardsBeingPlayed);
  } else if (playerTwoCard.v > playerOneCard.v) {
    if (tieCards.length > 0) {
      tieCards.forEach(card => playerTwoDeck.push(card));
      tieCards = [];
    }
    console.log("playertwo wins");
    playerTwoDeck.push(playerOneCard, playerTwoCard);
    // playerTwoDeck.push(cardsBeingPlayed);
  } else if (playerOneCard.v === playerTwoCard.v) {
    console.log("tie");
    tieCards.push(playerOneCard, playerTwoCard);

      // if (tieCards > 0){
      //   forEach()
      // }


    // playerOneDeck.push(playerOneCard);
    // playerTwoDeck.push(playerTwoCard);
    // playerOneDeck.shift(cardsBeingPlayed);
    // playerTwoDeck.shift(cardsBeingPlayed);
    
    // cardsBeingPlayed.push(playerOneCard, playerTwoCard);
//     playerOneDeck.push(cardsBeingPlayed);
      }
}
gameLogic();

function draw() {
  if (playerOneDeck.length == 0 || playerTwoDeck.length == 0) {
    console.log("game over");
  } else {
    playerOneValue = playerOneDeck[0].v;
    playerOneSuit = playerOneDeck[0].suit;

    playerTwoValue = playerTwoDeck[0].v;
    playerTwoSuit = playerTwoDeck[0].suit;
    let playerOneCardImg = document.getElementById("playerOneCard");
    let playerTwoCardImg = document.getElementById("playerTwoCard");
    playerOneCardImg.setAttribute(
      "src",
      "./assets/images/" + playerOneSuit + "-" + playerOneValue + ".svg"
    );
    playerTwoCardImg.setAttribute(
      "src",
      "./assets/images/" + playerTwoSuit + "-" + playerTwoValue + ".svg"
    );
    playerOneCard = playerOneDeck.shift();
    playerTwoCard = playerTwoDeck.shift();
    gameLogic();
  } 
  console.log(playerOneDeck)
  console.log(playerTwoDeck)
}
