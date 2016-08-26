// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';

// if (cardOne === cardTwo) {
// 	alert('You found a match!');	
// } else {
//   alert('Sorry, try again.');
// }

// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById('game-board');

// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {

    // create a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // append the card to the board
    board.appendChild(cardElement);
  }

}console.log("JS file is connected to HTML! Woo!")