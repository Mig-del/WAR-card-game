

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


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(cards);



let playerOneDeck = cards.slice(0, 26);
let playerTwoDeck = cards.slice(26);


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
  
  const newDiv = document.createElement("div");
  newDiv.id = "playerOne";

  const playerOneCardImg = document.createElement("img");
  playerOneCardImg.setAttribute(
    "src",
    "./assets/images/" + playerOneSuit + "-" + playerOneValue + ".svg"
  );
  playerOneCardImg.id = "playerOneCardImg";
  
  newDiv.appendChild(playerOneCardImg);

  const currentDiv = document.getElementById("div1");
  document.getElementById('playingCardsDiv').appendChild(newDiv);

  // create a new div element for player 2
  const div2 = document.createElement("div");
  div2.id = "playerTwo";

  const playerTwoCardImg = document.createElement("img");
  playerTwoCardImg.setAttribute(
    "src",
    "./assets/images/" + playerTwoSuit + "-" + playerTwoValue + ".svg"
  );
  playerTwoCardImg.id = "playerTwoCardImg";

  div2.appendChild(playerTwoCardImg);

  const currentDiv2 = document.getElementById("div1");
  document.getElementById('playingCardsDiv').appendChild(div2);
}

let playerOneCard = playerOneDeck.shift();

let playerTwoCard = playerTwoDeck.shift();
tieCards = [];

console.log(playerOneCard);
console.log(playerTwoCard);

function gameLogic() {
  if (playerOneCard.v > playerTwoCard.v) {
   document.getElementById('winner').innerHTML='Player One Win Round!';
    console.log("playerOne wins");
    if (tieCards.length > 0) {
      tieCards.forEach(card => playerOneDeck.push(card));
      tieCards = [];
    }
    playerOneDeck.push(playerOneCard, playerTwoCard);
  } else if (playerTwoCard.v > playerOneCard.v) {
    document.getElementById('winner').innerHTML ='Player Two Win Round!';
    if (tieCards.length > 0) {
      tieCards.forEach(card => playerTwoDeck.push(card));
      tieCards = [];
    }
    console.log("playertwo wins");
    playerTwoDeck.push(playerOneCard, playerTwoCard);
  } else if (playerOneCard.v === playerTwoCard.v) {
    document.getElementById('winner').innerHtml='Tie! Draw Again!';
    console.log("tie");
    tieCards.push(playerOneCard, playerTwoCard);
    
  }console.log(playerOneDeck);
  console.log(playerTwoDeck);
  console.log(tieCards)
}

gameLogic();

function draw() {
  // while (playerOneDeck.length > 0 || playerTwoDeck.length > 0) {
  if (playerOneDeck.length == 0 || playerTwoDeck.length == 0) {
    console.log("game over");
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
    gameLogic();
    document.getElementById('score').innerHTML= `player one: ${playerOneDeck.length} | player two ${playerTwoDeck.length} `
    
  }
//  // console.log(playerOneDeck);
//   // console.log(playerTwoDeck);
}

