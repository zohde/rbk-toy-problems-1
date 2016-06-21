<<<<<<< HEAD
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
	var arr = [];
	var arr2 = [];
	var no1 = "rock";
	var no2 = "paper";
	var no3 = "scissors";
	for (var i = 0; i < 3; i++) {
		arr2[0]=no1;
		arr2[1]=no2;
		arr2.[3]=no3;
		if(arr.indexOf(arr2) === -1){
			
		}
		}	


		arr.push(arr2);

	
	
	if(arr.length >= 27){return arr;}
	rockPaperScissors();


  // fill me out!
};
=======

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
};
>>>>>>> 694e90f1ecd5d5a4143bb5d21c59aadcf8b85a40
