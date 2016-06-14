/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
//--------------------------
// the function will take a number that is the number of rounds; 
// it will generte random output using Math.random to be pushed inside an array;
// which will then be included inside a bigger array;
// we will need variables to assign the players throws to it and three if statements that -
// refer to the options available. 
var rockPaperScissors = function(number) {
	var game = [];
	var playersChoice = game[Math.floor[Math.random() * 3]]
	if (playersChoice <= number){
		game.push(["rock"]);
	} else if (playersChoice === number ) {
		game.push(["paper"]);
	} else {
		game.push(["scissors"]);
	}
  // fill me out!
  // console.log(rockPaperScissors);
};
