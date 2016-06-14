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
  // fill me out!

  var solution = [];
  var x = 'rock';
  var y = 'paper';
  var z = 'scissors';
  var arr = [x,y,z]
  for(var k = 0; k < arr.length ; k++){
  	for(var i = 0 ; i<arr.length ; i++){
  		for(var j = 0; j<arr.length; j++){
  			solution.push([arr[k],arr[i],arr[j]])
  		}
  	}
  }

  return solution;
};



// we have only three choices (Rock) or (Paper) or (Scissors)
// lets assume they are 1 2 3 
// we will have  a large array that holds the possibilities
// we want to check if the new possibility is available from previous.
// so we would push an array of all 1s first then 
// we will check the next time if its the same ,
// if its the same then we will chance one of the ones to two
// what if we have an inner function that returns the three variable randomly.
// then check if its an index of them or not; but that is limited :S.
// Well , now if we defined a while loop that is set to true; 
// and the only way that would be changed to false is when all the possibilites are over 
// if we put the three main possibilites in different array 
// like ['rock','paper','scissors'].
// another way hahah i think is that if we did a nested for loop that will
// keep the first i fixed and just change the second one . so that would do
// [0 0 0] , then [0,0,1] , then [0,0,2]
// but then i want that to be [0,1,0]
// what if we added 3 for loops Hahaha thats crazy .!!
// so now what would happen lets see 
// start at [0,0,0] then [0,0,1] [0,0,2]
// good so far .
// then [0,1,0] [0,1,1] [0,1,2]

