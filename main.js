var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardsFlipped = [];
var flippedIndex = [];

// Get Board Div
var board = document.getElementById("game-board");

// Button to Reset Cards
document.getElementById("resetButton").addEventListener('click', flipCards);

// Create Game Board
var createBoard = function () {
	for (var i=0; i<cards.length; i++) {
		var newCardElement = document.createElement("div");
		newCardElement.className = "card";
		board.appendChild(newCardElement);
	 	newCardElement.setAttribute('data-card', cards[i]);
		newCardElement.addEventListener('click', isTwoCards);
		
	}
};

// Checks if Two Cards are in Play
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	
	// Flip Cards to Face Up by Adding Images
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src="king.jpg" alt="King" height="200px" width="150px">';
	} 
	else {
		this.innerHTML = '<img src="queen.jpg" alt="Queen" height="200px" width="150px" radius="20px">';
	}

	// Check for a Match
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		// Clear Cards
		cardsInPlay = [];
 	}
 }

// Function to reset board by flipping all cards back face down
function flipCards() {
	cardsToFlip = document.getElementsByClassName('card');
		for (i=0;i<cardsToFlip.length;i++){

			// Flip Card Face Down by Clearing HTML
	 		cardsToFlip[i].innerHTML = '';
	}
}
// Check if Two Cards are a Match
var isMatch = function(cardsArray) {
	if (cardsArray[0] == cardsArray[1]) {
		alert('You found a match!');
	}
	else {
		alert('Sorry, try again.')
	}
}

createBoard();
