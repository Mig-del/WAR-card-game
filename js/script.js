// Values for each card, A = 1, J = 11, Q = 12, K = 13
values = ["13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
suits = ["spades", "hearts", "diamonds", "clubs"];

const cards = [];
for (let s = 0; s < suits.length; s++) {
  for (let v = 1; v < 14; v++) {
    const suit = suits[s];
    cards.push({ v, suit });
  }
}

// making cards to be random when start of the game
// 26 cards each player
shuffle(cards);
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let playerOneDeck = cards.slice(0, 26);
let playerTwoDeck = cards.slice(26);
let playerOneValue = playerOneDeck[0].v;
let playerOneSuit = playerOneDeck[0].suit;
let playerTwoValue = playerTwoDeck[0].v;
let playerTwoSuit = playerTwoDeck[0].suit;

// DOM manipulation // created a div and id for each card image(2)
// different cards will be displayed after restart or draw
document.body.onload = addElement;

function addElement() {
  const imgCardOne = document.createElement("div");
  imgCardOne.id = "playerOne";

  const playerOneCardImg = document.createElement("img");
  playerOneCardImg.setAttribute(
    "src",
    "./assets/images/" + playerOneSuit + "-" + playerOneValue + ".svg"
  );
  playerOneCardImg.id = "playerOneCardImg";
  imgCardOne.appendChild(playerOneCardImg);

  const currentDiv = document.getElementById("div1");
  document.getElementById("playingCardsDiv").appendChild(imgCardOne);

  const imgCardTwo = document.createElement("div");
  imgCardTwo.id = "playerTwo";

  const playerTwoCardImg = document.createElement("img");
  playerTwoCardImg.setAttribute(
    "src",
    "./assets/images/" + playerTwoSuit + "-" + playerTwoValue + ".svg"
  );
  playerTwoCardImg.id = "playerTwoCardImg";
  imgCardTwo.appendChild(playerTwoCardImg);

  const currentDiv2 = document.getElementById("div1");
  document.getElementById("playingCardsDiv").appendChild(imgCardTwo);
}

// grabbing one card at a time to start each round of war
let playerOneCard = playerOneDeck.shift();
let playerTwoCard = playerTwoDeck.shift();

// empty array
// tie cards enter and picked up after next draw, not a tie.
tieCards = [];
function gameLogic() {
  if (playerOneCard.v > playerTwoCard.v) {
    document.getElementById("winner").innerHTML = "Winner, Player 1!";

    if (tieCards.length > 0) {
      tieCards.forEach((card) => playerOneDeck.push(card));
      tieCards = [];
    }
    playerOneDeck.push(playerOneCard, playerTwoCard);
  } else if (playerTwoCard.v > playerOneCard.v) {
    document.getElementById("winner").innerHTML = "Winner, Player 2!";
    if (tieCards.length > 0) {
      tieCards.forEach((card) => playerTwoDeck.push(card));
      tieCards = [];
    }
    playerTwoDeck.push(playerOneCard, playerTwoCard);
  } else if (playerOneCard.v === playerTwoCard.v) {
    tieCards.push(playerOneCard, playerTwoCard);
    document.getElementById("winner").innerHtml = "Tie! Draw Again!";
  }
}
gameLogic();

// when clicking the draw button
function draw() {
  if (playerOneDeck.length == 0 || playerTwoDeck.length == 0) {
    document.getElementById("winner").innerHTML = "GAME OVER";
  } else {
    playerOneValue = playerOneDeck[0].v;
    playerOneSuit = playerOneDeck[0].suit;
    playerTwoValue = playerTwoDeck[0].v;
    playerTwoSuit = playerTwoDeck[0].suit;

    let playerOneCardImg = document.getElementById("playerOneCardImg");
    let playerTwoCardImg = document.getElementById("playerTwoCardImg");
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
    document.getElementById(
      "score"
    ).innerHTML = `Player 1:   ${playerOneDeck.length}  |   Player 2: ${playerTwoDeck.length} `;
    gameLogic();
  }
}
