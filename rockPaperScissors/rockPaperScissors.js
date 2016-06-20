
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

var rockPaperScissors2 = function(n) {
  var solution = [];
  var choices = ['rock','paper','scissors'];
  var findAll = function(arr){
    if(arr.length === n){
      solution.push(arr);
      return;
    }
    for(var i = 0; i < choices.length ; i++){
      findAll(arr.concat(choices[i]));
    }
  }
  findAll([]);
  return solution;
};
// WHAT IF WE DID A FOR LOOP FOR THE THREE COLUMNS
// NOW WE WANT A FUNCTION THAT WOULD WORK SWTICH COLUMN 3 TIMES 
// JUST LIKE [0,0,0][0,0,1][0,0,2];
// WHAT WOULD OUR EDGE CASE BE TO LET THAT INTO RECURSIVE
// IF REACHED THE END OF ARRAY , THEN SEND TWO PARAMETERS ON THE RIGHT STATE
// AND WORK ON THE LOOP CHANGING YOU 
// FOR EXAMPLE IF WE ENTERED THE LOOP , THE i HAS A DECISION TREE'
// SO IT WOULD GO FOR A RECURSIVE SENDING IT A 0 PARAMETER
// NOW IF WE WENT TO THE SECOND COLUMN , ALSO HAVE A DECISION TREE;
// LET THAT TOO INTO RECURSIVE AND NOW WE WOULD REACH THE THIRD COLUMN
// THAT CANNOT GET INTO A RECURSIVE SO IT WOULD RUN THREE TIMES 
// CHANGING EACH OF X Y AND Z ;
// NOW ONCE WE GO BACK STEP , GOING ON TO I = 1; WE WOULD HAVE A DECISION TREE ;
// WHICH WOULD LET US AGAIN TO THREE TIMES ENTERING THE FOR LOOP WITH THREE DIFFERENT VALUES;
// AND THAT WOULD GO TILL THE END AND WE WILL GET THE RIGHT NUMBER OF POSSIBILITIES.
// WOHOOO , AND THAT WOULD BE EASILY TRANSLATED INTO CODE RIGHT NOW . I GUESS NOT .













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
