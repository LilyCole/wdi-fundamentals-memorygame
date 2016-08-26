var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardsFlipped = [];

// Get Board Div
var board = document.getElementById("game-board");

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
//	console.log('clicked');
	cardsInPlay.push(this.getAttribute('data-card'));
//	console.log(this.getAttribute('data-card'));

	flipCards();

/*	-- Tried Setting className here instead.. --
if (cardsFlipped.length === 2) {
		for (i=0;i<cardsFlipped.length;i++){
//			console.log('!! Cards should be flipped!');
	 		cardsFlipped[i].className = 'card';
//	 		console.log('cardsFlipped['+ i +'].className: '+ cardsFlipped[i].className);	 
//	 		console.log('Card in play: ' + cardsFlipped[0] + ', ' + cardsFlipped[1]);	
		}
	}
//	console.log('this.className: '+ this.className);
*/
	
	// Flip Cards to Face Up by Adding Images
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src="king.jpg" alt="King" height="200px" width="150px">';
		this.className = 'card-flipped';
	} 
	else {
		this.innerHTML = '<img src="queen.jpg" alt="Queen" height="200px" width="150px" radius="20px">';
		this.className = 'card-flipped';
	}

	// Check for a Match
	if (cardsInPlay.length === 2) {

		isMatch(cardsInPlay);
		// Clear Cards
		cardsInPlay = [];
 	}
 }


// Flip Cards to Face Down
function flipCards() {
	cardsFlipped = document.getElementsByClassName('card-flipped');
//	console.log('** clearCards ** cardsFlipped.length: '+ cardsFlipped.length + ': ' + cardsInPlay[0]);
	if(cardsFlipped.length === 2) {
		for (i=0;i<cardsFlipped.length;i++){
//			console.log('className BEFORE: '+ cardsFlipped[i].className);

			// Flip Card Face Down by Clearing HTML
	 		cardsFlipped[i].innerHTML = '';
	 		// -- TRIED to Set Class Name here. Doesn't work!! -- 
	 		cardsFlipped[i].className = 'card';

//	 		console.log('className AFTER: '+ cardsFlipped[i].className);
//	 		console.log('Card in play: ' + cardsInPlay[i]);
		}
	}
}

// Check if Two Cards are a Match
var isMatch = function(cardsArray) {
	if (cardsArray[0] == cardsArray[1]) {
		alert('You found a match!');
//		console.log('You found a match! CardsFlipped.length: '+ cardsFlipped.length);
//		console.log('Card in play: ' + cardsArray[0] + ', ' + cardsArray[1]);
	}
	else {
		alert('Sorry, try again.')
//		console.log('Sorry, try again. CardsFlipped.length: '+ cardsFlipped.length);
//		console.log('Card in play: ' + cardsArray[0] + ', ' + cardsArray[1]);
	}
}

createBoard();
