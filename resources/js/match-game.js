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

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};