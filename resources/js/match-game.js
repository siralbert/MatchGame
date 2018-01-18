var MatchGame = {};

// Waits for document to load before running main function
$(document).ready(function() {
	var $game = $('#game');
	
//	$('div#game').empty();
	
	var values = MatchGame.generateCardValues();
	console.log(values);
	
	//Initialize MatchGame and event handler to check if cards match or not
  MatchGame.renderCards(values, $game);
	
});

MatchGame.generateCardValues = function () {
	var sequentialValues = [];

  for (var value = 1; value <= 8; value++) {
    sequentialValues.push(value);
    sequentialValues.push(value);
  }
	
  var cardValues = [];
	
	while (sequentialValues.length > 0) {
    var randomIndex = Math.floor(Math.random() * sequentialValues.length);
    var randomValue = sequentialValues.splice(randomIndex, 1)[0];
    cardValues.push(randomValue);
  }
	
	return cardValues;	
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/
MatchGame.renderCards = function(cardValues, $game) {
	  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $game.empty(); //empty game element
	console.log("emptied game html element");
  $game.data('flippedCards', []); // game data object with key-value pair 'flippedCards' and [] (array)
	
	/* Initialize MatchGame board and attach data objects to each $cardElement */
	for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
		
		// Initialize randomized value, color, and data of card objects
    var value = cardValues[valueIndex];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };

		// base html code for a card
    var $cardElement = $('<div class="col-xs-3 card"></div>');
		// attach data object to $cardElement which includes style (color), value, and isFlipped (bool)
    $cardElement.data(data);

		// append/add html code to game div  ?? row??
    $game.append($cardElement);
		console.log($cardElement);
  }
	console.log("Initiailize cardgame");
	
	// Select card class.  Execute click event handler which calls the MatchGame.flipCard function
	$('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });
	
};



/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */
MatchGame.flipCard = function ($card, $game) {
	
	//do nothing if card isFlipped
  if ($card.data('isFlipped')) {
    return;
  }
	
	
	// TODO
	// change isFlipped key-value pair to true
 	$card.css('background-color', $card.data('color'))
      .text($card.data('value'))
      .data('isFlipped', true);

	// add flipped card to game data object
  var flippedCards = $game.data('flippedCards');
  flippedCards.push($card);

	// 
  if (flippedCards.length === 2) {
		
		// if the two data values match . . .
    if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
		// match CSS
      var matchCss = {
        backgroundColor: 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      };
      flippedCards[0].css(matchCss);
      flippedCards[1].css(matchCss);
    } else {		
		
		// else hold flipped cards in place for 350ms before turning them over
      var card1 = flippedCards[0];
      var card2 = flippedCards[1];
		
      window.setTimeout(function() {
        card1.css('background-color', 'rgb(32, 64, 86)')
            .text('')
            .data('isFlipped', false);
        card2.css('background-color', 'rgb(32, 64, 86)')
            .text('')
            .data('isFlipped', false);
      }, 350);			
    }
		
    $game.data('flippedCards', []);
  }
	// END TO DO
	
	
};

/*
getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

var MatchGame = {
  numbers:[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8],

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

 /*
generateCardValues : function () {
  var randomNumbers = [];
  var i = 0;

  while(MatchGame.numbers.length !== 0){

    // Generate random index between 0 and 15
    var randomIndex = getRandomInt(0, MatchGame.numbers.length); 

    // Insert a random number from numbers array 
    // in the randomized array
    randomNumbers.splice(i, 0, MatchGame.numbers[randomIndex]);

    // Remove number from the numbers array
    MatchGame.numbers.splice(randomIndex, 1);

    i++;
  }

  // Reinitialize numbers array
  MatchGame.numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

  return(randomNumbers);
},
 
};
*/
