console.log('it works');



values = ['A', 'K', 'Q', 'J', 'r10', 'r09', 'r08', 'r07', 'r06', 'r05','r04', 'r03','r02']
suits = ['spades', 'hearts', 'diamonds', 'clubs']


let highestToLowest = values.sort((a, b) => a-b);
console.log(highestToLowest);

const cards = [];
for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
        const value = values[v];
        const suit = suits[s];
        cards.push({value, suit});
        
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
const playerOneValue = playerOneDeck[random].value;
const playerOneSuit = playerOneDeck[random].suit;

const playerTwoValue = playerTwoDeck[random].value;
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

