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

var rockPaperScissors = function() {
	var rps = ['rock', 'paper', 'scissors'];
	var solutions = [];
	var solution = [];
	var rounds = 3;
	for (var j=0; j<rps.length; j++){
		solution[0]=rps[j];
		for (var x=0; x<rps.length; x++){
			solution[1] = rps[x];
			for (var y=0; y<rps.length; y++){
				solution [2] = rps[y];
				solutions.push(solution.map(function(e){return e;}));
			}	
		}
	}
	return solutions;
};

