'use strict';



const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt() {
    hangMan();
    rl.question('Guess: ', () => {
    });
  }
  getPrompt();

  const characters = [
    "Thor",
    "Spiderman",
    "Starlord",
    "Hulk",
    "Rocket"
];

  


let word = characters[Math.floor(Math.random() * characters.length)];

// Set up the amswer answerArrayvar answerArray = [];
const answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {


}


function hangMan() {

}

//Start with - for unanswered letters. Must be the length of the word.

// We need an input to guess a letter

//If that letter is a match in the word, then we replace dashes with that letter

//If that letter is not a match, we need to print 'Not a match'

//Must also keep track of attempts. 5 is a loss
