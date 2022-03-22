console.log('it works');



values = ['13', '12', '11', '10', '9', '8', '7', '6', '5','4', '3','2', '1']
suits = ['spades', 'hearts', 'diamonds', 'clubs']




const cards = [];
for (let s = 0; s < suits.length; s++) {
    for (let v = 1; v < 14; v++) {
    //     const value = values[v];
        const suit = suits[s];
        cards.push({v, suit});
        
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

const random = Math.floor(Math.random() * 25);
const playerOneValue = playerOneDeck[random].v;
const playerOneSuit = playerOneDeck[random].suit;

const playerTwoValue = playerTwoDeck[random].v;
const playerTwoSuit = playerTwoDeck[random].suit;






document.body.onload = addElement;





function addElement () {
  // create a new div element for player 1
  const newDiv = document.createElement("div");
  newDiv.id = "playerOne";

  
  const newContent = document.createElement("img");
    newContent.setAttribute("src", "./assets/images/" + playerOneSuit + "-" + playerOneValue + ".svg")  

  
  newDiv.appendChild(newContent);


  
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

    // create a new div element for player 2
    const div2 = document.createElement("div");
  
    
    const content2 = document.createElement("img");
      content2.setAttribute("src", "./assets/images/" + playerTwoSuit + "-" + playerTwoValue + ".svg")  
  
    div2.appendChild(content2);

    const currentDiv2 = document.getElementById("div1");
    document.body.insertBefore(div2, currentDiv2);

}


let keepPlaying = function(winningCards){
    if (winningCards) {console.log('winningCards', winningCards);}
}

// tie
if (playerOneValue === playerTwoValue){
    console('tie')

    // play another card
    winningCard.push(playerOneDeck);
    winningCard.push(playerTwoDeck);
    
} else if (playerOneValue > playerTwoValue){
    console.log('Player One wins draw');

    playerOneDeck.push(playerOneDeck.length, 0)


}



