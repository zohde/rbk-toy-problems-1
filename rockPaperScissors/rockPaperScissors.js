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

var rockPaperScissors = function(n) {
	var returnArray = [];
	var arr = [];
	var rock = "rock";
	var paper = "paper";
	var scissors = "scissors";
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < n; j++) {
			if(i === 0)
				arr.push(rock);
			if(i === 1)
				arr.push(paper);
			if(i === 2)
				arr.push(scissors);
		}
		returnArray.push(arr);
		arr = [];
	}
	return returnArray;


};